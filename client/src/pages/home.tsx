import image1 from "../images/image1.webp";
import image2 from "../images/image2.webp";
import image3 from "../images/image3.webp";
import image4 from "../images/image4.webp";

const cardData = [
    {
        id: 1,
        image: image1,
        title: "5 Amazing New JavaScript Features in ES15 (2014)",
        content: "5 juicy ES15 features with new functionality for cleaner and shorter Javascript code in 2024.",
    },
    {
        id: 2,
        image: image2,
        title: "Crypto Is Dead.",
        content:
            "I have been in crypto for years now, I saw it all - the highs, the lows, and the memes. I worked as a designer for two crypto startups.",
    },
    {
        id: 3,
        image: image3,
        title: "Instead of grinding LeetCode, learn mathematics, bro",
        content:
            "Let us face the uneasy truth: without a deep knowledge of the mathematics behind grinding algorithms and data structures.",
    },
    {
        id: 4,
        image: image4,
        title: "Apple just silently launched a mind-blowing feature and nobody is talking about it",
        content: "Why arent more people talking about this?",
    },
];

const Home = () => {
    return (
        <>
            {/* Search Bar */}
            <div className='mb-4'>
                <input
                    type='text'
                    placeholder='Search for...'
                    className='w-full p-2 border border-gray-300 rounded-lg'
                />
            </div>

            {/* Tags Bar */}
            <div className='mb-4 flex flex-wrap space-x-2'>
                <button className='px-4 py-2 bg-gray-300 rounded-full'>All</button>
                <button className='px-4 py-2 bg-gray-300 rounded-full'>Technology</button>
                <button className='px-4 py-2 bg-gray-300 rounded-full'>Design</button>
                <button className='px-4 py-2 bg-gray-300 rounded-full'>Philosophy</button>
                <button className='px-4 py-2 bg-gray-300 rounded-full'>Mathematics</button>
                <button className='px-4 py-2 bg-gray-300 rounded-full'>Travel</button>
            </div>

            {/* Blog UI Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {cardData.map((card) => (
                    <div key={card.id} className='bg-white p-4 rounded-lg shadow-lg text-left'>
                        <img src={card.image} alt={card.title} className='w-full h-40 object-cover mb-4 rounded-lg' />
                        <h2 className='text-lg font-bold mb-2'>{card.title}</h2>
                        <p className='text-gray-700'>{card.content}</p>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className='mt-4 flex justify-center'>
                <button className='px-4 py-2 mx-1 bg-gray-300 rounded-lg'>Previous</button>
                <button className='px-4 py-2 mx-1 bg-gray-300 rounded-lg'>1</button>
                <button className='px-4 py-2 mx-1 bg-gray-300 rounded-lg'>2</button>
                <button className='px-4 py-2 mx-1 bg-gray-300 rounded-lg'>Next</button>
            </div>
        </>
    );
};

export default Home;
