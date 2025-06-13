import { _mock } from './_mock';

export const ROOM_SERVICES = [
  {
    id: _mock.id(0),
    title: 'Менежертэй холбогдох',
    icon: 'carbon:phone',
    category: 'Өрөөний үйлчилгээ',
    subcategory: 'Менежертэй холбогдох',
    content: `Менежертэй холбогдох үйлчилгээ нь таны санал, хүсэлт, асуудлыг шуурхай шийдвэрлэхэд тусална.`,
    price: 0,
  },
  {
    id: _mock.id(1),
    title: 'Өрөө цэвэрлэх',
    icon: 'carbon:clean',
    category: 'Өрөөний үйлчилгээ',
    price: 12000,
    content: `
      Өрөө цэвэрлэх үйлчилгээ
      Таны өрөөг өдөр бүр стандартын дагуу цэвэрлэж, тав тухтай орчинг бүрдүүлнэ.

      Бүтэн өрөөний тоос соруулах
      Ариун цэврийн өрөө цэвэрлэх
      Тавилга арчих

    `,
  },
  {
    id: _mock.id(2),
    title: 'Өрөөний үйлчилгээ',
    icon: 'carbon:room-service',
    category: 'Өрөөний үйлчилгээ',
    subcategory: 'Өрөө цэвэрлэх',
    price: 15000,
  },
  {
    id: _mock.id(3),
    title: 'Ор дэвсгэр солих',
    icon: 'carbon:bed',
    category: 'Өрөөний үйлчилгээ',
    subcategory: 'Ор дэвсгэр солих',
    subcategory: 'Өрөөний үйлчилгээ',
    price: 10000,
  },
  {
    id: _mock.id(33),
    title: 'Ор хожуу суллах (18:00 хүртэл)',
    icon: 'carbon:clock',
    category: 'Өрөөний үйлчилгээ',
    subcategory: 'Ор хожуу суллах',
    price: 30000,
    content: `
      <h5>Ор хожуу суллах</h5>
      <p>18:00 цаг хүртэл өрөөг ашиглах боломжтой. Нөхцөлөөс шалтгаалан төлбөртэй.</p>
    `,
  },
  {
    id: _mock.id(34),
    title: 'Дуудлага сэрүүлэг',
    icon: 'carbon:alarm',
    category: 'Өрөөний үйлчилгээ',
    subcategory: 'Дуудлага сэрүүлэг',
    price: 0,
  },
  {
    id: _mock.id(35),
    title: 'Нэмэлт өрөөний хугацаа',
    icon: 'carbon:time',
    category: 'Өрөөний үйлчилгээ',
    subcategory: 'Нэмэлт өрөөний хугацаа',
    price: 20000,
  },
  {
    id: _mock.id(36),
    title: 'Менежерт зурвас илгээх',
    icon: 'carbon:message',
    category: 'Өрөөний үйлчилгээ',
    subcategory: 'Менежерт зурвас илгээх',
    price: 0,
    content: `
      <h5>Менежерт зурвас</h5>
      <p>Танд санал, хүсэлт, асуудал байгаа бол эндээс шууд мессеж илгээнэ үү.</p>
    `,
  },
  {
    id: _mock.id(42),
    title: 'Цонх онгойлгох',
    icon: 'carbon:window',
    category: 'Өрөөний үйлчилгээ',
    subcategory: 'Цонх онгойлгох',
    price: 0,
    content: `
      <h5>Цонх онгойлгох</h5>
      <p>Таны хүсэлтээр цонхыг онгойлгож, цэвэр агаар оруулна.</p>
    `,
  },
  {
    id: _mock.id(43),
    title: 'Халаалт тохируулах',
    icon: 'carbon:temperature',
    category: 'Өрөөний үйлчилгээ',
    subcategory: 'Халаалт тохируулах',
    price: 0,
    content: `
      <h5>Халаалт тохируулах</h5>
      <p>Өрөөний халаалтыг таны хүссэн хэмд тохируулна.</p>
    `,
  },
  {
    id: _mock.id(44),
    title: 'Хөргөгч дүүргэх',
    icon: 'carbon:refrigerator',
    category: 'Өрөөний үйлчилгээ',
    subcategory: 'Хөргөгч дүүргэх',
    price: 5000,
    content: `
      <h5>Мини хөргөгч дүүргэх</h5>
      <p>Мини хөргөгчийг таны хүссэн ундаа, зуушаар дүүргэнэ.</p>
    `,
  },
];
