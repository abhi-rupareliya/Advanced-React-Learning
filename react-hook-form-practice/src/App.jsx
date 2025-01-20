import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";

const App = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
    trigger
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      age: "",
      birthDate: "",
      hobbies: [{ name: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "hobbies",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const checkEmailAvailability = async (email) => {
    // Simulate a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate email check logic (e.g., checking if email is already taken)
        if (email === "taken@example.com") {
          resolve(false); // Email is taken
        } else {
          resolve(true); // Email is available
        }
      }, 1000);
    });
  };

  return (
    <Box
      sx={{
        padding: 4,
        maxWidth: 600,
        margin: "auto",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        React Hook Form with MUI
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Input */}
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          {...register("name", { required: "Name is required" })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        {/* Email Input */}
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          {...register("email", {
            required: "Email is required",
            validate: async (value) => {
              // Check if email is available
              const isAvailable = await checkEmailAvailability(value);
              if (!isAvailable) {
                return "Email is already taken";
              }
            },
          })}
          onBlur={()=>{
            trigger("email");
          }}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
            validate: {
              hasUpperCase: (value) =>
                /[A-Z]/.test(value) ||
                "Password must contain at least one uppercase letter",
              hasLowerCase: (value) =>
                /[a-z]/.test(value) ||
                "Password must contain at least one lowercase letter",
              hasDigit: (value) =>
                /\d/.test(value) || "Password must contain at least one digit",
              hasSpecialChar: (value) =>
                /[@$!%*?&]/.test(value) ||
                "Password must contain at least one special character (@$!%*?&)",
            },
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        {/* Age Input */}
        <TextField
          fullWidth
          label="Age"
          type="number"
          variant="outlined"
          margin="normal"
          {...register("age", {
            required: "Age is required",
            min: { value: 1, message: "Age must be at least 1" },
          })}
          error={!!errors.age}
          helperText={errors.age?.message}
        />

        {/* Birth Date Input */}
        <TextField
          fullWidth
          label="Birth Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          margin="normal"
          {...register("birthDate", { required: "Birth date is required" })}
          error={!!errors.birthDate}
          helperText={errors.birthDate?.message}
        />

        {/* Hobbies Array */}
        <Typography variant="h6" sx={{ mt: 2 }}>
          Hobbies
        </Typography>
        {fields.map((item, index) => (
          <Grid container spacing={2} key={item.id} alignItems="center">
            <Grid item xs={9}>
              <TextField
                fullWidth
                label={`Hobby ${index + 1}`}
                variant="outlined"
                {...register(`hobbies.${index}.name`, {
                  required: "Hobby is required",
                })}
                error={!!errors.hobbies?.[index]?.name}
                helperText={errors.hobbies?.[index]?.name?.message}
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="outlined"
                color="error"
                onClick={() => remove(index)}
              >
                Remove
              </Button>
            </Grid>
          </Grid>
        ))}
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => append({ name: "" })}
        >
          Add Hobby
        </Button>

        {/* Submit Button */}
        <Box sx={{ mt: 4 }}>
          <Button type="submit" variant="contained" color="success" fullWidth>
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default App;
