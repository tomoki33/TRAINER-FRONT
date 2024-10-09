export const fetchTrainingData = async () => {
    // APIからトレーニングデータを取得するロジックを実装
    return [
      { name: 'ベンチプレス', sets: 3, reps: 10 },
      { name: 'スクワット', sets: 3, reps: 15 },
      { name: 'デッドリフト', sets: 3, reps: 8 },
    ];
  };
  
  export const fetchMealData = async () => {
    // APIから食事データを取得するロジックを実装
    return [
      { meal: '朝食', calories: 500 },
      { meal: '昼食', calories: 700 },
      { meal: '夕食', calories: 600 },
    ];
  };
  
  export const fetchProgressData = async () => {
    // APIから進捗データを取得するロジックを実装
    return [
      { date: '2024-10-01', weight: 70, bodyFat: 15 },
      { date: '2024-10-02', weight: 69.5, bodyFat: 14.8 },
      { date: '2024-10-03', weight: 69, bodyFat: 14.5 },
    ];
  };
  
  export const fetchCalendarData = async () => {
    // APIからカレンダーデータを取得するロジックを実装
    return [
      { date: '2024-10-01', event: 'トレーニング' },
      { date: '2024-10-02', event: '休息' },
      { date: '2024-10-03', event: 'トレーニング' },
    ];
  };

  export const fetchTrainingMenu = async () => {
    // API 呼び出しの実装
    return [
      { exercise: 'ベンチプレス', sets: 3, reps: 10, duration: '30分' },
      { exercise: 'スクワット', sets: 3, reps: 15, duration: '45分' },
    ];
  };
  
  export const fetchTrainingDetail = async (exercise: string) => {
    // API 呼び出しの実装
    return {
      videoUrl: 'https://example.com/video.mp4',
      description: 'ベンチプレスの説明',
      precautions: '注意事項',
    };
  };
  
  export const submitTrainingProgress = async (progress: { weight: string; reps: string; duration: string }) => {
    // API 呼び出しの実装
  };
  
  export const fetchTrainingHistory = async () => {
    // API 呼び出しの実装
    return [
      { date: '2023-01-01', progress: 50 },
      { date: '2023-01-02', progress: 55 },
    ];
  };
  
  export const updateTrainingSettings = async (settings: { sets: string; weight: string }) => {
    // API 呼び出しの実装
  };