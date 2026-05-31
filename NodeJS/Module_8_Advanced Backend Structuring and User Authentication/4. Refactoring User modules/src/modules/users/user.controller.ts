import type {  Request,  Response  } from "express";
import { pool } from "../../db";
import { userService } from "./user.service";


const createUser = async (req: Request, res: Response) => {

//   const { name, email, password, is_active, age } = req.body;

  try {
    
    const result = await userService.createUserIntoDB(req.body);
    res.status(201).json({
      success: true,
      message: "Created Successfully!",
      data: result.rows[0]
    });

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: error
    });
  }
}


// get all users

const getAllUsers = async (req: Request, res: Response) => {

  try {
    const result = await userService.getAllUsersFromDB();
    res.status(200).json({
      success: true,
      message: "Users retrived successfully!",
      data: result.rows
    })
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "No user created!",
      data: {}
    })
  }


}


const getSingleUser = async (req: Request, res: Response) => {

  const { id } = req.params;

  const result = await userService.getSingleUserFromDB(Number(id) as number)
  if (result.rows.length === 0) {
    res.status(404).json({
      success: false,
      message: "Not found!",
      data: {}
    });
  }

  res.status(200).json({
    success: true,
    message: "Users retrived successfully!",
    data: result.rows[0]
  })

}


const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  // const { name, password, age, is_active, updated_at } = req.body;

  try {
    const result = await userService.updateUserIntoDB(req.body, Number(id) as number);


    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "Not found!",
        data: {}
      });
    }
    res.status(201).json({
      success: true,
      message: "User updated successfully!!!",
      data: result.rows[0]
    });

  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
      data: {}
    })
  }
}



const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await userService.deleteUserFromDB(Number(id)  as number);
    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: "Not found!",
        data: {}
      });
    }


    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: {}
    })
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,

    })
  }
}


export const userController = {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
}