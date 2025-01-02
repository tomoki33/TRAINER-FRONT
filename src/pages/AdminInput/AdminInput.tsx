import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

type FormData = {
  calories: string;
  menu: string;
  reps: string;
  sets: string;
};

const AdminInput: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  // Function to handle form submission
  const onSubmit = async (data: FormData) => {
    try {
      // カラムは未作成、作成後追記
      await axios.post('http://localhost:8000/meal/', { recommendedCalories: data.calories });

      // カラムは未作成、作成後追記
      await axios.post('http://localhost:8000/training/', {
        trainingMenu: data.menu,
        repetitions: data.reps,
        sets: data.sets,
      });

      console.log('All data submitted successfully!');

      // フォームリセット
      reset();

      alert('登録が完了しました！');
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('データの送信に失敗しました。');
    }
  };

  return (
    <div className="Goal">
      <h1>顧客情報入力</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="calories">推奨カロリー:</label>
          <input
            type="number"
            id="calories"
            {...register('calories')}
            placeholder="例: 2000"
          />
        </div>

        <div>
          <label htmlFor="menu">トレーニングメニュー:</label>
          <input
            type="text"
            id="menu"
            {...register('menu')}
            placeholder="例: ベンチプレス"
          />
        </div>

        <div>
          <label htmlFor="reps">回数 (Reps):</label>
          <input
            type="number"
            id="reps"
            {...register('reps')}
            placeholder="例: 10"
          />
        </div>

        <div>
          <label htmlFor="sets">セット数:</label>
          <input
            type="number"
            id="sets"
            {...register('sets')}
            placeholder="例: 3"
          />
        </div>

        <button type="submit">登録</button>
      </form>
    </div>
  );
};

export default AdminInput;
