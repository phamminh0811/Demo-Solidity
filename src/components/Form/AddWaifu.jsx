import React from 'react'
import "./Form.css";
import { useForm } from "react-hook-form";
import { create } from 'ipfs-http-client';
import { PrimaryButton } from "./components/PrimaryButton";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";
import { Input } from "./components/Input";

const AddWaifu = ({contract}) => {
    const client = new create("https://ipfs.infura.io:5001/api/v0");
    const { register, handleSubmit } = useForm();
    const onSubmit = async(data) => {
        console.log(data);
        const result = await client.add(data.charImg[0]);
        try{
            const contractTxn = await contract.set_waifu(data.charName,data.charDetail,('https://gateway.ipfs.io/ipfs/'+ result.path));
            await contractTxn.wait();
        } catch(error){
            console.log(error);
        }
    }

    

    return(
        <MainContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register("charName",{ required: true })} 
                            name="charName"
                            id="charName"
                            type="text"       
                            placeholder="Character Name"/>
                <Input {...register("charDetail",{ required: true })} 
                            name="charDetail"
                            id="charDetail"
                            type="text" 
                            placeholder="Character Detail"/>
                <Input {...register("charImg",{ required: true })} 
                            name="charImg"
                            id="charImg"
                            type="file" placeholder="Character Image"/>
                
                <PrimaryButton type="submit">Submit</PrimaryButton>
            </Form>
        </MainContainer>
    );
};

export default AddWaifu