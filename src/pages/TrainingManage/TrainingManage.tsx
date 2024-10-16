import React from 'react';

import TrainingDetail from '../../components/TrainingManage/TrainingDetail/TrainingDetail';
import TrainingHistory from '../../components/TrainingManage/TrainingHistory/TrainingHistory';
import TrainingMenu from '../../components/TrainingManage/TrainingMenu/TrainingMenu';
import TrainingSummary from '../../components/TrainingManage/TrainingSummary/TrainingSummary';
import TrainingCustomization from '../../components/TrainingManage/TrainingCustomization/TrainingCustomization';
import TrainingProgressForm from '../../components/TrainingManage/TrainingProgressForm/TrainingProgressForm';
import { useNavigate } from 'react-router-dom';

const TrainingManage: React.FC = () => {

  return (
    <div className="TrainingManage">
      <h1>トレーニング管理</h1>
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