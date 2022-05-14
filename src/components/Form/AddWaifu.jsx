import React from 'react'
import "./Form.css";
import { useForm } from "react-hook-form";
import { useHistory} from "react-router-dom";
import { PrimaryButton } from "./components/PrimaryButton";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";
import { Input } from "./components/Input";

const AddWaifu = () => {
    const { register, handleSubmit, error } = useForm();
    const history = useHistory();

    const onSubmit = (data) => {
        history.push("/result")
    }

    return(
        <MainContainer>
            <Form>
                <Input {...register("charName",{ required: true })} type="text" placeholder="Character Name"/>
                <Input {...register("charDetail",{ required: true })} type="text" placeholder="Character Detail"/>
                <Input {...register("charImg",{ required: true })} type="file" placeholder="Character Image"/>
                <PrimaryButton type="submit">Next</PrimaryButton>
            </Form>
        </MainContainer>
    );
};

export default AddWaifu