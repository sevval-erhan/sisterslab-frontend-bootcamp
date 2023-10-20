import React from 'react';

const DataDisplay = ({ title, data, text, number }) => {
  // map yöntemi ile obje dizisini liste haline getiriyoruz.
  const dataList = data.map((item, index) => (
    <li key={index}>{item.name}</li>
  ));

  // some yöntemi ile listede "Bob" adlı bir kişi var mı kontrol ediyoruz.
  const hasBob = data.some(item => item.name === 'Bob');

  // every yöntemi ile listedeki her kişinin adının uzunluğu 5 karakterden fazla mı kontrol ediyoruz.
  const allNamesLong = data.every(item => item.name.length > 5);

  // reduce yöntemi ile listedeki adların baş harflerini birleştiriyoruz.
  const initials = data.reduce((accumulator, item) => accumulator + item.name[0], '');

  // template literal kullanarak çıktıyı oluşturuyoruz.
  const output = `${text} Bu listede ${data.length} kişi var. Örnek bir sayı: ${number}. Bob var mı? ${hasBob ? 'Evet' : 'Hayır'}. Tüm adlar uzun mu? ${allNamesLong ? 'Evet' : 'Hayır'}. İlk harfler: ${initials}`;

  return (
    <div>
      <h2>{title}</h2>
      <ul>{dataList}</ul>
      <p>{output}</p>
    </div>
  );
};

// Kullanım örneği
const App = () => {
  const data = [{ name: 'Alice' }, { name: 'Bob' }];
  const text = 'Merhaba, React!';
  const number = 42;

  return (
    <DataDisplay title="Veri Listesi" data={data} text={text} number={number} />
  );
};

export default App;



