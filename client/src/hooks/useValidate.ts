import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnyObjectSchema } from "yup";
export const useValidate = (schema: AnyObjectSchema) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return { register, handleSubmit, errors, isLoading };
};
