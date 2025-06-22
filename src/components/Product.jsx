import img1 from './images/desktop/promo_ipad_air__bfbxzvw65c02_large.jpg';
import img2 from './images/Products/promo_iphone_tradein__bugw15ka691e_medium.jpg';
import img3 from './images/desktop/promo_ios18__eo1lt24j3wk2_large.jpg';
import img4 from './images/Products/promo_iphone_family__ofrg9zdy1teq_medium.jpg';

const Product = () => {
  const productData = [
    {
      id: 1,
      title: "iOS 18",
      lines: ["Personalise your iPhone with", "10 new Indian languages"],
      bgImage: img1,
      highlight: true,
    },
    {
      id: 2,
      title: "iPad air",
      lines: ["Now supercharged by the M3 chip"],
      bgImage: img2,
    },
    {
      id: 3,
      title: "MacBook pro",
      lines: ["A work of smart"],
      bgImage: img3,
    },
    {
      id: 4,
      title: "iPhone",
      lines: ["Meet the iPhone 16 family"],
      bgImage: img4,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto p-1">
      {productData.map(({ id, title, lines, bgImage, highlight }) => (
        <div
          key={id}
          className="text-center text-white h-[60vh] flex flex-col items-center justify-end bg-cover bg-center mt-4 cursor-pointer"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className={highlight ? 'mb-96' : 'mb-96'}>
            <h1 className="text-black text-3xl font-bold">{title}</h1>
            {lines.map((line, index) => (
              <p key={index} className="text-black text-2xl">{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;