import React from 'react';
import AboutPlace from './AboutPlace';
import tokyo from "../assets/tokyo-sakura.jpg";
import kyoto from "../assets/kyoto-sakura.jpg";
import fuji from "../assets/fuji-sakura.jpg";
import hirosaki from "../assets/hirosaki-sakura.jpg";
import sapporo from "../assets/sakura-sapporo.jpg";

const About = () => {
  return (
    <div className='w-full bg-black text-white text-center'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 '>
        <div>
          <h1 className='py-4'>Cherry blossoms in Japan: a guide to parks and regions</h1>
          <p className='py-4 text-xl'>
            At the end of March, sakura begins to bloom in Japan and every year thousands of tourists go there just to look at the blossoming buds of the Japanese cherry.
          </p>
          <p className='py-4 text-xl'>
            The Japanese associate cherry blossoms with clouds; they metaphorically call walks in the garden with cherry blossoms walking among the clouds. The comparison refers to the principle of mono no aware - "the sad charm of things." What is sad about beautiful rose buds? It turns out that the whole point is the transience of flowering and their rapid withering - the Japanese correlate this with the life and death of a person.
          </p>
          <a href="https://www.onetwotrip.com/#/search"><button className='py-4 text-xl'>Flight + Hotel</button></a>
          <p className='py-4 text-xl'>
            Watching the blooming flowers is denoted in Japanese by the word "hanami", which literally translates as "admiring the flowers." The tradition attracts tourists from all over the world and even gradually goes beyond the country. However, neither in Chicago, nor in Amsterdam, nor in Yuzhno-Sakhalinsk, where there are also sakura alleys, admiring cherry blossoms will not give such emotions as in Japan. The very atmosphere of the country, its customs, architecture and mentality contribute to the maximum immersion in hanami.
          </p>
          <p className='py-4 text-xl'>
            Sakura blooms for a short time - about 7-10 days. If you do not have time to get into the flowering period of trees in one region, you can go to another. Or even arrange a tour around the country to enjoy cherry blossoms for a month and a half, moving from one garden to another.
          </p>
          <p className='py-4 text-xl'>
            Due to the short flowering period before the trip, you need to find out exactly if you can see the awakening of the trees in a particular place, or it is better to go to the region where the sakura blossoms later. Cherry blossoms are charted every year and are fairly <a href={'https://www.japan-guide.com/sakura/'} className='text-[#af0b3b]'>accurate</a> . For example, this year in Tokyo, cherry blossoms will bloom at the end of March, and in Sapporo, flowering will begin only at the beginning of May.
          </p>

          <h1 className='py-4'>Where to go for hanami</h1>

          {/* Place Container */}
          <div className='grid sm:grid-cols-2 lg:grid-cols-2 gap-5'>

            {/* Place */}
            <AboutPlace  src={tokyo} href={"https://www.onetwotrip.com/ru/hotels/search/japan/tokyo"} heading='Tokyo' text='In the Japanese capital, there are several large parks with sakura. For example, Ueno, also known for its zoo, which has about two and a half thousand animals. If you missed the main cherry blossom season in Tokyo, pay attention to Shinjuku-gyoen (Shinjuku Gyoen), where not only early, but also late varieties of sakura grow. In both parks, flowering should begin in the last days of March. Shinjuku Gyoen is considered one of the best hanami venues in all of Japan.' />
            <AboutPlace  src={fuji} href={"https://www.onetwotrip.com/ru/hotels/search/japan/yamanakako-mura"} heading='Five Lakes Fuji' text='In the vicinity of Mount Fuji, there are parks where sakura grows in abundance. Five lakes (Yamanaka, Kawaguchi, Sai, Shoji and Motosu) are beautiful in their own right, and during the cherry blossom season they are even more transformed. So, from Lake Kawaguchi (Kawaguchiko) a beautiful view of the mountain itself opens in any season. On the northern and eastern shores of this lake, there are many sakura trees that bloom in early April.' />
            <AboutPlace src={hirosaki} href={"https://www.onetwotrip.com/ru/hotels/search/japan/hirosaki"} heading='Tohoku Region' text='Tohoku is located in the northern part of the island of Honshu. Cherry blossom here comes later than in other regions. The peak is at the end of April - beginning of May. In the small town of Kitakami, there is the wonderful Tenshochi Park, which attracts tourists year after year.' />
            <AboutPlace src={sapporo} href={"https://www.onetwotrip.com/ru/hotels/search/japan/sapporo"} heading='Sapporo' text='Sapporo on the island of Hokkaido has three parks at once, where you can see cherry blossoms. These are the park Maruyama (Maruyama, not to be confused with the place of the same name in Kyoto), Odori (Odori) and Moerenuma (Moerenuma). Here the sakura will bloom the latest - not earlier than the first days of May.' />
            <AboutPlace src={kyoto} href={"https://www.onetwotrip.com/ru/hotels/search/japan/kyoto"} heading='Kyoto' text='In the city of Kyoto on the island of Honshu, there are also large parks, as if specially created for the hanami. A water channel stretches along the city, along the banks of which cherry trees grow. This place is called the “Philosophical Road” (Path of Philosophy): it is assumed that a walk under the cherry blossoms will help you get away from vain thoughts and tune in to high thoughts. The main place in Kyoto for hanami is Maruyama Park. The highlight is the luxurious-looking weeping cherry, which is illuminated at night during the flowering period.' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
