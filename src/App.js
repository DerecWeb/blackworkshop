import './categories.scss';
import Directory from "./components/directory/directory.component";

function App() {

  const category = [
    {
      id: 1,
      title: 'Bags',
      imageUrl: 'https://img.freepik.com/premium-photo/design-space-on-tote-bag_53876-2165.jpg?size=626&ext=jpg&ga=GA1.2.1982703513.1672759445&semt=sph'

    },
    {
      id: 2,
      title: 'Wallets',
      imageUrl: 'https://img.freepik.com/free-photo/close-up-hands-holding-wallet-and-coins_23-2148773947.jpg?size=626&ext=jpg&ga=GA1.2.1982703513.1672759445&semt=sph'

    },
    {
      id: 3,
      title: 'Backpack',
      imageUrl: 'https://img.freepik.com/free-photo/image-of-man-staying-on-the-street-and-look-at-camera_197531-33456.jpg?size=626&ext=jpg&ga=GA1.2.1982703513.1672759445&semt=sph'

    },
    {
      id: 4,
      title: 'For Man',
      imageUrl: 'https://img.freepik.com/free-photo/confident-handsome-businessman-in-suit-pointing-finger_171337-18603.jpg?size=626&ext=jpg&ga=GA1.2.1982703513.1672759445&semt=sph'

    },
    {
      id: 5,
      title: 'For Woman',
      imageUrl: 'https://img.freepik.com/free-photo/serious-young-lady-with-bright-makeup-lips_171337-17135.jpg?size=626&ext=jpg&ga=GA1.2.1982703513.1672759445&semt=sph'

    },
    {
      id: 6,
      title: 'Gift',
      imageUrl: 'https://img.freepik.com/free-photo/portrait-of-a-smiling-woman-holding-gift-box_171337-3633.jpg?size=626&ext=jpg&ga=GA1.2.1982703513.1672759445&semt=sph'

    }
  ]
  return (
<Directory category={category}/>
  );
}

export default App;
