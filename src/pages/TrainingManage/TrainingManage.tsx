import React from 'react';

import TrainingDetail from '../../components/TrainingDetail/TrainingDetail';
import TrainingHistory from '../../components/TrainingHistory/TrainingHistory';
import TrainingMenu from '../../components/TrainingMenu/TrainingMenu';
import TrainingSummary from '../../components/TrainingSummary/TrainingSummary';
import TrainingCustomization from '../../components/TrainingCustomization/TrainingCustomization';
import TrainingProgressForm from '../../components/TrainingProgressForm/TrainingProgressForm';
import { useNavigate } from 'react-router-dom';

const TrainingManage: React.FC = () => {

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div className="TrainingManage">
      <h1>トレーニング管理</h1>
      <button onClick={navigateToHome}>ホーム画面へ</button>
      <TrainingDetail exercise={''} />
      <TrainingHistory />
      <TrainingMenu />
      <TrainingSummary />
      <TrainingCustomization />
      <TrainingProgressForm />
    </div>
  );
};

export default TrainingManage;