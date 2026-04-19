import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLike, toggleFavorite, addRating } from '../components/itemSlice';

const ItemDetail = () => {
  const dispatch = useDispatch();
  
  // Получаем данные из стора
  const { likes, isFavorite, ratings } = useSelector((state) => state.item);

  // 4. Вывод средней оценки объекта (вычисляемое значение)
  const averageRating = ratings.length > 0
    ? (ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length).toFixed(1)
    : 0;

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>Управление объектом</h2>
      
      <p>Лайков: {likes}</p>
      <p>В избранном: {isFavorite ? 'Да ❤️' : 'Нет 🤍'}</p>
      <p>Средняя оценка: {averageRating} (голосов: {ratings.length})</p>

      <div style={{ display: 'flex', gap: '10px' }}>
        {/* 1. Добавление Like */}
        <button onClick={() => dispatch(addLike())}>
          Поставить Лайк
        </button>

        {/* 2. Добавление в избранное */}
        <button onClick={() => dispatch(toggleFavorite())}>
          {isFavorite ? 'Убрать из избранного' : 'В избранное'}
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <p>3. Добавить оценку:</p>
        {[1, 2, 3, 4, 5].map((num) => (
          <button key={num} onClick={() => dispatch(addRating(num))}>
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ItemDetail;