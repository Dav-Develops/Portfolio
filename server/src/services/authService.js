import User from '../models/User.js';

export const registerUser = async ({name, email, password}) => {
    const existingUser = await User.findOne({email});

    if(existingUser){
        throw new Error("User already exists 😃");
    }
    const user = await User.create({
        name, email, password
    });
    return user;
};

export const loginUser = async ({email, password}) => {
    const user = await User.findOne({email});
    
    if(!user){
        throw new Error("Invalid username or password");
    }
    const isPasswordvalide = await user.comparePassword(password);
    
    if(!isPasswordvalide){
        throw new Error("Invalid username or password");
    }
    return user;
};