import type { Request, Response } from "express";
import { profileService } from "./profile.service";

const getAllProfiles = async(req: Request, res: Response) => {

    try {
        const result = await profileService.getAllProfilesFromDB();
        
        if(result.rows.length === 0){
            res.status(200).json({
                success: true,
                message: "No user profile has been created yet.",
                data: {}
            })
        }

        res.status(200).json({
            success: true,
            message: "All users retrieved successfully!",
            data: result.rows
        })
    } catch (error: any) {
            res.status(500).json({
                success: false,
                message: error.message,
                data: {}
        })
    }
    
}


const getSingleProfile = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const result = await profileService.getSingleProfileFromDB(Number(id));

        if(result.rows.length === 0){
            res.status(404).json({
                success: false,
                message: "Profile not found!",
                data: {}
            })
        }
        res.status(200).json({
            success: true,
            message: "Profile retrieved successfully!",
            data: result.rows[0]
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            data: {}
        })
    }
}

const createProfile = async (req: Request, res: Response) => {
    try {
        const result = await profileService.createProfileIntoDB(req.body);

        res.status(200).json({
            success: true,
            message: "Profile created successfully!",
            data: result.rows[0]
        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            data: {}
        })        
    }
}


const updateProfile = async(req: Request, res: Response)=>{
    const { id } = req.params;
    try {
        const result = await profileService.updateProfileIntoDB(req.body, Number(id));

        if(result.rowCount === 0){
            res.status(404).json({
                success: false,
                message: "Profile not found!",
                data: {}
            })
        }

        res.status(200).json({
            success: true,
            message: "Profile updated successfully!",
            data: result.rows[0]
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            data: {}
        })
    }
}

const deleteProfile = async(req: Request, res: Response)=>{
    const { id } = req.params;

    try {
        const result = await profileService.deleteProfileFromDB(Number(id));

        if(result.rowCount === 0){
            res.status(404).json({
                success:false,
                message: "Profile not found!",
                data: {}
            })
        }

        res.status(200).json({
            success: true,
            message: "Profile Deleted Successfully",
            data: result.rows[0]
        })
        
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            data: {}
        })
    }
}


export const profileController = {
    getAllProfiles,
    getSingleProfile,
    createProfile,
    updateProfile,
    deleteProfile
}