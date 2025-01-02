import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const response = await fetch("http://localhost:8000/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTPエラー: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("登録成功:", responseData);
      window.location.href = "/home";
    } catch (error) {
      console.error("登録失敗:", error);
      alert("データの登録に失敗しました。");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>ログイン</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
        {/* メールアドレス入力 */}
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>メールアドレス</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "メールアドレスは必須です" })}
            style={styles.input}
          />
          {errors.email && <span style={styles.error}>{errors.email.message}</span>}
        </div>

        {/* パスワード入力 */}
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>パスワード</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "パスワードは必須です" })}
            style={styles.input}
          />
          {errors.password && <span style={styles.error}>{errors.password.message}</span>}
        </div>

        {/* ログインボタン */}
        <button type="submit" style={styles.button}>
          ログイン
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center" as const,
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
    display: "block" as const,
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginTop: "5px",
  },
};

export default Login;
