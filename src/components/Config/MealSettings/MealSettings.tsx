import React, { useState } from 'react';

interface MealSettingsProps {
  onSubmit: (settings: { mealType: string; allergies: string[] }) => void;
}

const MealSettings: React.FC<MealSettingsProps> = ({ onSubmit }) => {
  const [mealType, setMealType] = useState<string>('normal');
  const [allergies, setAllergies] = useState<string[]>([]);

  const handleAllergyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAllergies((prev) =>
      e.target.checked ? [...prev, value] : prev.filter((allergy) => allergy !== value)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ mealType, allergies });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>食事プランの種類:</label>
        <select value={mealType} onChange={(e) => setMealType(e.target.value)}>
          <option value="normal">通常</option>
          <option value="vegetarian">ベジタリアン</option>
          <option value="low-carb">低炭水化物</option>
        </select>
      </div>
      <div>
        <label>アレルギー:</label>
        <div>
          <label>
            <input type="checkbox" value="gluten" onChange={handleAllergyChange} />
            グルテン
          </label>
          <label>
            <input type="checkbox" value="peanut" onChange={handleAllergyChange} />
            ピーナッツ
          </label>
          <label>
            <input type="checkbox" value="lactose" onChange={handleAllergyChange} />
            乳製品
          </label>
        </div>
      </div>
      <button type="submit">設定保存</button>
    </form>
  );
};

export default MealSettings;
