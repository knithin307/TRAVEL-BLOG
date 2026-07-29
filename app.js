// --- APPS STATE & STARTER DATA ---

// Hardcoded Travel Blog Posts
let blogPosts = [
    {
        id: 1,
        title: "Whispers of Bamboo: A Serene Week in Kyoto",
        author: "Aria Sterling",
        authorInitials: "AS",
        date: "July 24, 2026",
        region: "Asia",
        location: "Kyoto, Japan",
        duration: "7 Days",
        budget: "$$$",
        readTime: "6 min read",
        image: "images/post_kyoto.jpg",
        description: "Delve into the quiet spirituality of Japan's ancient capital. From the emerald paths of Arashiyama to the crimson gates of Fushimi Inari, explore Kyoto's timeless charm.",
        content: `
            <p>Kyoto is a city that moves at the speed of a falling cherry blossom. In contrast to the neon-drenched skies of Tokyo, here the skylines are punctuated by the curved eaves of wooden pagodas and the dark green silhouettes of surrounding mountains.</p>
            <p>My journey began at dawn in the Arashiyama Bamboo Grove. Arriving at 6:00 AM is essential; before the crowds descend, the grove is a temple of silence. The wind rustles through the towering bamboo stalks, creating a metallic, hollow music that the Japanese Ministry of the Environment has officially named one of the "100 Soundscapes of Japan". Walking slowly along the path, bathed in the cool, green-tinted light, I felt a profound sense of peace.</p>
            <p>From Arashiyama, I traveled to the Fushimi Inari Shrine. Famous for its path of over 10,000 orange torii gates, the mountain hike is both a physical test and a spiritual pilgrimage. As you climb higher, the shrines become smaller, the moss grows thicker, and the panoramic views of southern Kyoto open up beneath you.</p>
            <blockquote>"Kyoto does not shout its beauty; it whispers it in zen gardens, tea bowls, and soft footsteps."</blockquote>
            <p>For food lovers, the Nishiki Market offers an endless parade of delicacies. I sampled fresh octopus skewers, sweet matcha ice cream, and delicate yuba (tofu skin). In the evenings, I wandered the narrow alleyways of Gion, hoping to catch a glimpse of a geisha glidding between appointments. Kyoto is not just a place you visit; it is a atmosphere you breathe.</p>
        `,
        comments: [
            { name: "Kenji Sato", text: "Beautifully captured! Next time, check out the Nanzen-ji temple area in autumn.", time: "2 days ago" },
            { name: "Emily Watson", text: "The tip about arriving at Arashiyama at 6 AM saved my itinerary. Thank you!", time: "1 day ago" }
        ]
    },
    {
        id: 2,
        title: "Conquering the Heights: The Glacier Express Journey",
        author: "Marcus Vance",
        authorInitials: "MV",
        date: "June 12, 2026",
        region: "Europe",
        location: "Swiss Alps",
        duration: "5 Days",
        budget: "$$$$",
        readTime: "8 min read",
        image: "images/post_swiss.jpg",
        description: "Ride the legendary red train through high mountain passes, dramatic stone viaducts, and pristine alpine valleys on the world's slowest express train.",
        content: `
            <p>The Swiss Alps command respect. They rise like jagged crystal teeth into the sky, carpeted in deep green pines and capped with perpetual white glaciers. The best way to experience them without crampons and ropes is the Glacier Express.</p>
            <p>Connecting Zermatt, at the foot of the mighty Matterhorn, to St. Moritz, the train journey covers 291 kilometers over eight hours. It crosses 291 bridges and passes through 91 tunnels. Sitting in the panoramic observation cars, the scenery feels almost impossibly close, like a high-definition documentary projection wrapping around your head.</p>
            <p>One of the highlights is the crossing of the Landwasser Viaduct. The train emerges from a sheer cliff tunnel directly onto a 65-meter-high curved stone bridge, supported by five arches that seem to grow right out of the valley floor. Looking down, the river looks like a tiny blue thread winding through the canyon.</p>
            <p>During our stops in tiny alpine villages, we feasted on traditional raclette—melted cheese scraped over new potatoes, gherkins, and pickled onions. The mountain air is so crisp it feels like drinking cold water. Switzerland is expensive, but standing on the peak of the Gornergrat looking at twenty-nine peaks over 4,000 meters makes every Swiss Franc feel worth it.</p>
        `,
        comments: [
            { name: "Sarah Jenkins", text: "Did you book the Excellence Class? Is it worth the price tag?", time: "3 days ago" },
            { name: "Jean-Pierre", text: "Magnifique! Come back in winter for the ultimate ski experience.", time: "1 week ago" }
        ]
    },
    {
        id: 3,
        title: "Sea of Dunes: A Night Under the Sahara Stars",
        author: "Leyla Kouri",
        authorInitials: "LK",
        date: "May 08, 2026",
        region: "Africa",
        location: "Sahara Desert",
        duration: "3 Days",
        budget: "$$",
        readTime: "5 min read",
        image: "images/post_sahara.jpg",
        description: "Embrace the silence of the Erg Chebbi dunes. Ride camels into the glowing sunset and sleep in a luxury Berber camp surrounded by endless sand.",
        content: `
            <p>Nothing prepares you for the absolute quiet of the desert. In our daily lives, there is always a low hum—traffic, refrigerator compressors, distant planes. In the Sahara, the silence is a physical presence, wrapping around you like a heavy wool blanket.</p>
            <p>Our journey started in Merzouga, a small village at the edge of the Erg Chebbi dunes. We mounted camels just as the afternoon heat began to break. As the camels marched in a slow, rhythmic sway, the sand transformed from pale yellow to deep ochre, and finally to a glowing rose-gold as the sun dipped below the horizon.</p>
            <p>We arrived at our camp nestled between towering dunes. We were served hot mint tea—the traditional welcome drink known as Berber whiskey—followed by a rich tagine cooked slowly over charcoal. The hospitality of our Berber hosts was as warm as the desert sands.</p>
            <p>Later that night, the fires were extinguished, and we climbed to the top of the nearest dune. With no light pollution for hundreds of miles, the Milky Way arched across the sky in stunning detail, looking like a cosmic mist. Shooting stars crossed the sky every few minutes. In the vastness of the Sahara, you realize just how small, and yet how connected, we all are.</p>
        `,
        comments: [
            { name: "David Miller", text: "Wow, sleeping under those stars must have been life-changing.", time: "4 days ago" },
            { name: "Fatima Z.", text: "Glad you enjoyed Morocco! The hospitality in Erg Chebbi is legendary.", time: "3 days ago" }
        ]
    },
    {
        id: 4,
        title: "Chasing Sunsets Along the Amalfi Coastline",
        author: "Lucas Rossi",
        authorInitials: "LR",
        date: "April 19, 2026",
        region: "Europe",
        location: "Amalfi Coast",
        duration: "4 Days",
        budget: "$$$$",
        readTime: "7 min read",
        image: "images/post_amalfi.jpg",
        description: "Meander through colorful cliffside villages, cruise the sparkling blue Mediterranean sea, and drink freshly squeezed limoncello along Italy's most scenic coast.",
        content: `
            <p>The Amalfi Coast is a masterpiece of vertical architecture. Pastel-colored houses cling to sheer cliffs, appearing to almost stack on top of one another, terminating in the deep, cobalt-blue waters of the Tyrrhenian Sea.</p>
            <p>We based ourselves in Positano. Wandering through Positano means navigating hundreds of stone steps. Every staircase leads to a new discovery—a trellis of blooming purple bougainvillea, a small boutique selling linen shirts, or a terrace restaurant offering plates of fresh scialatielli pasta tossed with clams and mussels.</p>
            <p>On our second day, we rented a wooden gozzo boat to see the coastline from the water. Floating beneath the cliffs of Praiano and swimming into the Emerald Grotto, the coastline looks even more majestic from below. The sea spray was cool, and the water was incredibly clear.</p>
            <p>No trip to Amalfi is complete without visiting Ravello, perched high above the sea. The gardens of Villa Cimbrone offer the 'Terrace of Infinity', lined with marble busts against a backdrop of deep blue water and sky. Standing there, it feels like looking off the edge of the world.</p>
        `,
        comments: [
            { name: "Sophia Bianchi", text: "Did you try the lemons in Amalfi? They are as large as grapefruits!", time: "2 weeks ago" },
            { name: "Arthur Pendelton", text: "Stunning photos! I am planning a honeymoon here next spring.", time: "1 week ago" }
        ]
    },
    {
        id: 5,
        title: "Concrete Jungle: An Insider's View of Manhattan's Skyline",
        author: "Emma Stone",
        authorInitials: "ES",
        date: "March 15, 2026",
        region: "Americas",
        location: "New York, USA",
        duration: "5 Days",
        budget: "$$$",
        readTime: "5 min read",
        image: "images/post_newyork.jpg",
        description: "Explore the bustling streets of Manhattan. Climb the Empire State Building at midnight, stroll through Central Park, and find hidden coffee shops in Greenwich Village.",
        content: `
            <p>New York City doesn't sleep, and honestly, neither did I. The energy of Manhattan is contagious. It is a city made of glass, steel, steam, and dreams.</p>
            <p>We started our exploration in the green lung of the city, Central Park. Strolling through the Ramble and sitting by the Bethesda Fountain, it's easy to forget that you are surrounded by millions of people and towering skyscrapers. The sound of horse carriages and street musicians fills the crisp morning air.</p>
            <p>As night fell, we headed to the Top of the Rock at Rockefeller Center. The view from there is spectacular because it gives you a direct, unobstructed view of the Empire State Building rising majestically above midtown. The city lights spread out like a field of glowing embers.</p>
            <p>For food, we stayed away from the tourist traps and spent our afternoons in the West Village and Lower East Side, snacking on classic NY slices of pizza and discovering basement jazz clubs. New York is busy, noisy, and expensive—but it is also one of the most exciting cultural melting pots on Earth.</p>
        `,
        comments: [
            { name: "John Doe", text: "Best pizza is definitely in Brooklyn! Try L'Industrie next time.", time: "1 month ago" }
        ]
    },
    {
        id: 6,
        title: "Winds of Patagonia: Trekking the Fitz Roy Trail",
        author: "Santiago Silva",
        authorInitials: "SS",
        date: "February 28, 2026",
        region: "Americas",
        location: "Patagonia, Argentina",
        duration: "8 Days",
        budget: "$$",
        readTime: "7 min read",
        image: "images/post_patagonia.jpg",
        description: "Embark on an epic hiking journey through the wild, wind-swept landscapes of Argentine Patagonia, leading to the breathtaking turquoise lagoon of Laguna de los Tres.",
        content: `
            <p>Patagonia is a place of extremes. The winds are strong enough to blow you off your feet, the weather changes four times in an hour, and the granite peaks rise like giant spires directly out of the flat plains.</p>
            <p>Our base was El Chaltén, the trekking capital of Argentina. The trail to Mount Fitz Roy (Laguna de los Tres) is a 21-kilometer round trip that tests your legs and your resolve. The final kilometer is a steep climb over loose rocks and moraine, but as soon as you crest the ridge, the sight of the jagged peaks framing the bright turquoise lagoon drives away all exhaustion.</p>
            <p>We camped near the trailhead, listening to the wind howl through the canvas. The next morning, we woke up at 5:00 AM to see the sunrise. The granite face of Fitz Roy turned a deep, fiery red under the first rays of sun—a phenomenon the locals call 'Alpenglow'. It was a sight I will carry in my memory forever.</p>
        `,
        comments: [
            { name: "Clara M.", text: "This trail is on my bucket list! What season do you recommend?", time: "3 weeks ago" }
        ]
    },
    {
        id: 7,
        title: "Harbour Lights: A Coastal Guide to Sydney",
        author: "Chloe Adams",
        authorInitials: "CA",
        date: "January 14, 2026",
        region: "Oceania",
        location: "Sydney, Australia",
        duration: "6 Days",
        budget: "$$$",
        readTime: "6 min read",
        image: "images/post_sydney.jpg",
        description: "Soak in the sun at Bondi Beach, ride the public ferries across the gorgeous harbour, and dine under the sails of the iconic Sydney Opera House.",
        content: `
            <p>Sydney is a city built around water. Its harbour is its heart, and its beaches are its soul. The lifestyle here is relaxed, sunny, and centered on the outdoors.</p>
            <p>My first morning was spent on the famous Bondi to Coogee coastal walk. The path hugs the limestone cliffs, offering spectacular views of the crashing Pacific surf and leading past ocean-fed saltwater pools where locals swim laps at sunrise.</p>
            <p>In the afternoon, I took the public ferry from Circular Quay to Manly. For the price of a standard transit ticket, you get a world-class cruise across the harbour, passing right by the Sydney Opera House and the Harbour Bridge. The white sails of the Opera House look like sculptures floating on the blue water.</p>
            <p>We finished our trip with a glass of local Shiraz at the Opera Bar, watching the bridge lights turn on as the sun set behind the skyline. Sydney has the perfect balance of urban excitement and natural beauty.</p>
        `,
        comments: [
            { name: "Liam Hemsworth", text: "Bondi is great, but Bronte beach is much quieter and nicer!", time: "2 weeks ago" }
        ]
    },
    {
        id: 8,
        title: "Eternal Sunrise: A Morning at the Taj Mahal",
        author: "Devendra Naidu",
        authorInitials: "DN",
        date: "December 05, 2025",
        region: "Asia",
        location: "Agra, Uttar Pradesh, India",
        duration: "3 Days",
        budget: "$$",
        readTime: "5 min read",
        image: "images/post_india.jpg",
        description: "Witness the sun rise over the world's most beautiful monument to love. Discover the marble patterns, misty Yamuna river views, and historical charm of Agra.",
        content: `
            <p>There are some places in the world that have been photographed so many times that you expect to feel underwhelmed when you see them in person. The Taj Mahal is not one of them. No photograph can capture the weight of its grandeur, the symmetry of its gardens, or the way the marble seems to change color with the sky.</p>
            <p>I arrived at the East Gate at 5:30 AM, huddled in the cool morning mist. As the gates opened and I walked through the red sandstone archway, the monument emerged like a white ghost in the soft, purple twilight. Slowly, as the sun began to climb, the marble shifted from a cool grey to a soft pink, and finally to a glowing golden-orange.</p>
            <p>The Yamuna River behind the Taj was covered in a thick layer of river mist, giving the entire complex a floating, dreamlike quality. Walking close, I was amazed by the detailed pietra dura—inlays of semi-precious stones like lapis lazuli, jasper, and jade carved directly into the white marble in intricate floral patterns.</p>
            <p>After visiting the Taj, I explored the massive red walls of the Agra Fort, standing in the tower where Shah Jahan spent his final years looking out at the monument he built for his beloved Mumtaz. India is a sensory explosion, and Agra is its crown jewel.</p>
        `,
        comments: [
            { name: "Anita Sharma", text: "Incredible description. Sunrise is indeed the best time to visit!", time: "2 weeks ago" }
        ]
    },
    {
        id: 9,
        title: "Echoes of the Deccan: Discovering Hyderabad's Charminar",
        author: "Kabir Khan",
        authorInitials: "KK",
        date: "November 18, 2025",
        region: "Asia",
        location: "Hyderabad, Telangana, India",
        duration: "3 Days",
        budget: "$$",
        readTime: "5 min read",
        image: "images/post_charminar.jpg",
        description: "Explore the bustling markets surrounding Hyderabad's iconic four-minaret monument. Indulge in authentic Hyderabadi biryani and buy pearls.",
        content: `
            <p>Hyderabad is a city where history meets high-tech, but its heart remains anchored in the old city. Standing tall at the center of a bustling traffic grid is the Charminar—literally 'Four Minarets'—built in 1591 by Sultan Muhammad Quli Qutb Shah to celebrate the end of a deadly plague.</p>
            <p>I climbed the narrow spiral staircase inside one of the minarets to the upper balcony. Looking out, you see the chaotic tapestry of the Laad Bazaar below, famous for its glowing glass and lacquer bangles, and the historic Mecca Masjid in the distance. The air was filled with the aroma of strong Irani chai and baking Osmania biscuits.</p>
            <p>No trip to Hyderabad is complete without tasting the legendary Hyderabadi Biryani. Cooked in the 'dum' style—where marinated meat and parboiled rice are sealed together in a heavy pot and slow-cooked over coals—the flavors are rich and complex. Hyderabad wraps you in old-world Nizam royalty and sweet, spiced aromas.</p>
        `,
        comments: [
            { name: "Rohan P.", text: "Loved this! Did you visit the Golconda Fort? The acoustic system there is amazing.", time: "1 week ago" }
        ]
    },
    {
        id: 10,
        title: "The Pantheon of Gopurams: Madurai Meenakshi Temple",
        author: "Priya Rajan",
        authorInitials: "PR",
        date: "October 10, 2025",
        region: "Asia",
        location: "Madurai, Tamil Nadu, India",
        duration: "2 Days",
        budget: "$",
        readTime: "6 min read",
        image: "images/post_meenakshi.jpg",
        description: "Marvel at the soaring, multi-colored temple towers of Madurai, covered in thousands of detailed stone carvings depicting legends of deities and mythical beasts.",
        content: `
            <p>Madurai is one of the oldest continuously inhabited cities in India, and at its absolute core lies the massive Meenakshi Amman Temple complex. Dedicated to Meenakshi, a form of Parvati, and her consort Sundareswarar (Shiva), the temple is a dizzying maze of stone pillars, sacred pools, and towering gateways.</p>
            <p>There are 14 gopurams (temple towers) in the complex, the tallest rising to over 50 meters. Every single gopuram is covered in thousands of colorful stone figures of gods, demons, and animals, repainted every 12 years to keep the colors vibrant. Looking up at the South Gopuram in the evening light is a sensory overload—it looks like a towering wave of sacred sculpture frozen in mid-air.</p>
            <p>Inside, I walked through the Hall of a Thousand Pillars. Each pillar is carved with life-like details of warriors, musicians, and legendary beasts like the Yali. The temple is alive with the chanting of priests, the scent of burning camphor, and the quiet devotion of thousands of pilgrims shuffling past.</p>
        `,
        comments: [
            { name: "Vijay G.", text: "Meenakshi Temple is truly a wonder of ancient engineering.", time: "5 days ago" }
        ]
    },
    {
        id: 11,
        title: "Coastal Breezes: The Sandy Shores of Visakhapatnam",
        author: "Sandeep V.",
        authorInitials: "SV",
        date: "September 24, 2025",
        region: "Asia",
        location: "Visakhapatnam, Andhra Pradesh, India",
        duration: "3 Days",
        budget: "$$",
        readTime: "4 min read",
        image: "images/post_vizag.png",
        description: "Relax along the scenic coastline of Vizag. Walk along RK Beach, visit the Kursura Submarine Museum, and take a cable car ride up Kailasagiri.",
        content: `
            <p>Visakhapatnam—often called Vizag—is a unique coastal city in Andhra Pradesh where lush green hills of the Eastern Ghats meet the blue waters of the Bay of Bengal. It has a relaxed maritime charm that sets it apart from other busy cities.</p>
            <p>I spent my evenings walking along the Ramakrishna (RK) Beach. The sound of waves crashing against the black rocks is incredibly soothing. Right on the beach is the INS Kursura Submarine Museum, a real retired Soviet-built submarine that has been preserved on land. Walking through its narrow corridors gives you a profound respect for the officers who lived inside.</p>
            <p>On my last day, I rode the ropeway cable car up Kailasagiri hill. From the peak, you get a breathtaking panoramic view of the crescent-shaped coastline meeting the city streets. Vizag is the perfect escape for anyone seeking hills and ocean breezes.</p>
        `,
        comments: [
            { name: "Anil K.", text: "Vizag is beautiful. Try the bamboo chicken in nearby Araku Valley next time!", time: "2 days ago" }
        ]
    },
    {
        id: 12,
        title: "Sacred Vaults: The Mystique of Sree Padmanabhaswamy Temple",
        author: "Meera Nair",
        authorInitials: "MN",
        date: "August 12, 2025",
        region: "Asia",
        location: "Thiruvananthapuram, Kerala, India",
        duration: "2 Days",
        budget: "$$",
        readTime: "5 min read",
        image: "images/post_trivandrum.png",
        description: "Step into the world's richest temple in Kerala, styled in gorgeous Dravidian architecture and home to the reclining gold idol of Lord Vishnu.",
        content: `
            <p>Thiruvananthapuram, the capital of Kerala, is home to the majestic Sree Padmanabhaswamy Temple. Built in an elegant fusion of Kerala and Dravidian architectural styles, this temple is famous not just for its spiritual significance, but for its hidden vaults containing untold treasures of gold, diamonds, and ancient artifacts.</p>
            <p>Entering the temple requires wearing the traditional clothing: a dhoti (mundu) for men and a saree or set-mundu for women. Walking through the stone corridors, the air is cool and scented with sandalwood. The main deity, Lord Vishnu, is represented in the 'Anantha Shayanam' posture—reclining on the giant serpent Adishesha, visible through three separate doors.</p>
            <p>The golden flagstaff, the stone carvings of the temple corridors, and the sacred Padma Theertham pond reflecting the tall gopuram create an atmosphere of timeless spirituality. Kerala's devotion is quiet, deep, and beautifully preserved.</p>
        `,
        comments: [
            { name: "Devi P.", text: "A truly divine experience. The architectural details are stunning.", time: "1 month ago" }
        ]
    },
    {
        id: 13,
        title: "Mist and Coffee: Wandering the Hills of Coorg",
        author: "Rohan Hegde",
        authorInitials: "RH",
        date: "July 08, 2025",
        region: "Asia",
        location: "Coorg, Karnataka, India",
        duration: "4 Days",
        budget: "$$",
        readTime: "5 min read",
        image: "images/post_kyoto.jpg",
        description: "Escape to the 'Scotland of India'. Walk through green coffee plantations, hike the misty peaks of Madikeri, and listen to the roar of Abbey Falls.",
        content: `
            <p>Coorg—officially known as Kodagu—is a misty highland district in Karnataka famed for its sprawling coffee estates, aromatic spices, and friendly Kodava culture. Waking up to the smell of fresh coffee and the sight of mist rolling over the green valleys is a true rejuvenator.</p>
            <p>I stayed in a homestay nestled inside a working coffee plantation. Our host walked us through the estate, pointing out Arabica and Robusta berries growing alongside pepper vines and cardamom plants. In the afternoons, we hiked up to Raja's Seat in Madikeri to watch the sun set behind the folding blue hills.</p>
            <p>We also visited the Namdroling Monastery (Golden Temple) in nearby Bylakuppe. Walking from the mist of Coorg into a massive Tibetan settlement with chanting monks and giant gold Buddha statues felt like stepping into a different country. Coorg is a feast for the senses.</p>
        `,
        comments: [
            { name: "Sneha M.", text: "Coorg coffee is the best! The homemade pork curry (Pandi curry) there is legendary too.", time: "2 weeks ago" }
        ]
    },
    {
        id: 14,
        title: "Golden Sands & Swaying Palms: A Guide to Goa's Beaches",
        author: "Sarah Gomez",
        authorInitials: "SG",
        date: "June 20, 2025",
        region: "Asia",
        location: "Goa, India",
        duration: "5 Days",
        budget: "$$",
        readTime: "6 min read",
        image: "images/post_goabeach.png",
        description: "Soak in the sun at Goa's beautiful beaches. Explore the lively stretches of Baga, the quiet coves of Palolem, and Portuguese historical ruins.",
        content: `
            <p>Goa is synonymous with beaches, but there are two distinct sides to this coastal state. North Goa offers lively flea markets, water sports, and beach shacks. South Goa is a temple of tranquility, lined with coconut palms and quiet, white-sand coves.</p>
            <p>I began my journey in Palolem, South Goa. The beach is a crescent-shaped bay protected by headlands, making the water calm enough for paddleboarding. In the evenings, we sat at beachside tables, drinking local Feni (a spirit made from cashew or coconut) and eating fresh grilled fish under the stars.</p>
            <p>In the north, we visited the ruins of Cabo de Rama fort, where the cliff drop offers spectacular views of the Arabian Sea. Goa has a unique 'Susegad' lifestyle—a Portuguese-influenced concept of laid-back enjoyment—that makes it impossible to feel stressed.</p>
        `,
        comments: [
            { name: "John S.", text: "Loved Palolem. Agonda beach nearby is also fantastic for nesting turtles!", time: "1 month ago" }
        ]
    },
    {
        id: 15,
        title: "Sentinel of the Harbour: Mumbai's Historic Taj Mahal Hotel",
        author: "Vikram Mehta",
        authorInitials: "VM",
        date: "May 14, 2025",
        region: "Asia",
        location: "Mumbai, Maharashtra, India",
        duration: "2 Days",
        budget: "$$$$",
        readTime: "5 min read",
        image: "images/post_newyork.jpg",
        description: "Step into the architectural grandeur of Mumbai's most iconic luxury hotel, standing proudly next to the Gateway of India.",
        content: `
            <p>Mumbai is a city of dreams, speed, and contrast. But standing on the waterfront of Colaba, facing the Arabian Sea, the pace slows down. Here stands the Taj Mahal Palace, a luxury hotel built in 1903 that has hosted princes, presidents, and rock stars.</p>
            <p>The hotel's design is a stunning blend of Florentine, Oriental, and Moorish styles. The central dome is a sentinel for ships entering the harbor, built before the Gateway of India next door was even constructed. Inside, the grand cantilevered staircase and the quiet courtyards offer an escape from Mumbai's chaotic streets.</p>
            <p>I sat by the window in the Sea Lounge, drinking afternoon High Tea and watching the ferries bob on the water. Mumbai is a city that never stops, but inside the Taj, the elegance of the past remains perfectly preserved.</p>
        `,
        comments: [
            { name: "Aishwarya R.", text: "An absolute architectural masterpiece. The heritage wing is beautiful.", time: "2 weeks ago" }
        ]
    },
    {
        id: 16,
        title: "The Submerged Kingdom: Devotion and History in Dwarka",
        author: "Hardik Patel",
        authorInitials: "HP",
        date: "April 02, 2025",
        region: "Asia",
        location: "Dwarka, Gujarat, India",
        duration: "3 Days",
        budget: "$",
        readTime: "5 min read",
        image: "images/post_dwarka.jpg",
        description: "Explore the ancient pilgrimage site of Dwarka on the edge of Gujarat, dedicated to Lord Krishna and steeped in archaeological legends of a sunken city.",
        content: `
            <p>Dwarka, situated on the westernmost tip of Gujarat, is one of the four sacred 'Char Dham' pilgrimage sites. According to Hindu mythology, it was the capital of Lord Krishna's kingdom, built by Vishwakarma, which eventually sank beneath the Arabian Sea after Krishna left the earth.</p>
            <p>The Dwarkadhish Temple, built on five stories supported by 72 pillars, dominates the skyline. The temple spire is topped by a massive 72-foot flag bearing the symbols of the sun and moon, which flutter grandly in the heavy ocean wind. Standing at the 'Moksha Dwar' (gate of salvation) looking down at the Gomti River meeting the sea is a powerful spiritual moment.</p>
            <p>We took a boat ride to Bet Dwarka, an island offshore. Marine archaeologists have discovered stone anchors, blocks, and pottery in the waters here, indicating a large ancient port city lay submerged beneath the waves. Dwarka is a place where myth, faith, and history converge.</p>
        `,
        comments: [
            { name: "Suresh B.", text: "The boat ride to Bet Dwarka is very beautiful. Great write-up!", time: "1 month ago" }
        ]
    },
    {
        id: 17,
        title: "The Eternal Light of Kashi: Varanasi's Sacred Temples",
        author: "Amit Tripathy",
        authorInitials: "AT",
        date: "March 11, 2025",
        region: "Asia",
        location: "Varanasi, Uttar Pradesh, India",
        duration: "3 Days",
        budget: "$",
        readTime: "6 min read",
        image: "images/post_varanasi.jpg",
        description: "Discover the spiritual intensity of Varanasi, the city of light. Walk the ancient ghats, visit the Kashi Vishwanath temple, and witness the Ganga Aarti.",
        content: `
            <p>Varanasi—also known as Kashi—is believed by Hindus to be one of the oldest cities in the world, founded by Shiva himself. Mark Twain once wrote that Benares is 'older than history, older than tradition, older even than legend, and looks twice as old as all of them put together.'</p>
            <p>The spiritual center of the city is the Kashi Vishwanath Temple, dedicated to Lord Shiva as the ruler of the universe. Its golden domes, plated with over 800 kilograms of gold donated by Maharaja Ranjit Singh, rise above the narrow maze of lanes called 'galis'. The energy here is intense, filled with the chanting of prayers and the sound of bells.</p>
            <p>At dusk, I took a boat onto the Ganges to witness the Ganga Aarti at Dashashwamedh Ghat. Young priests wave towering brass oil lamps in synchronized movements to the beat of cymbals, offering light to the river. The reflections of thousands of floating clay lamps (diyas) on the dark water make the river look like a mirror of the night sky.</p>
        `,
        comments: [
            { name: "Rajesh S.", text: "Varanasi is indeed a transformative experience. Excellent post.", time: "3 weeks ago" }
        ]
    },
    {
        id: 18,
        title: "Golden Dunes & Camel Caravans: Trekking the Thar Desert",
        author: "Ravi Shekhawat",
        authorInitials: "RS",
        date: "February 15, 2025",
        region: "Asia",
        location: "Jaisalmer, Rajasthan, India",
        duration: "4 Days",
        budget: "$$",
        readTime: "5 min read",
        image: "images/post_sahara.jpg",
        description: "Explore the Golden City of Jaisalmer, sleep under the stars in the Thar Desert, and listen to the traditional folk music of the desert nomads.",
        content: `
            <p>Rajasthan is a land of kings, colors, and forts. But its western edge belongs to the great Thar Desert. Jaisalmer, built entirely of yellow sandstone that glows like gold in the afternoon sun, rises out of the desert sand like a giant sandcastle.</p>
            <p>We traveled to the Sam Sand Dunes, located 40 kilometers from the city. Mounting camels, we rode into the undulating waves of sand as the sun set, turning the sky a deep shade of crimson and violet. The sand was cool to the touch and constantly shifted under the desert wind.</p>
            <p>That evening, we sat around a campfire at a desert camp, listening to the haunting melodies of the Kamaicha (a stringed instrument) played by Manganiyar folk musicians. The desert stars shone down with incredible brilliance, casting a silver light over the empty dunes. Jaisalmer is a golden dream.</p>
        `,
        comments: [
            { name: "Karan Singh", text: "Sleeping on the dunes under the stars is an unforgettable experience.", time: "2 weeks ago" }
        ]
    },
    {
        id: 19,
        title: "Land of High Passes: Monasteries and Cold Deserts of Ladakh",
        author: "Tenzin Gyatso",
        authorInitials: "TG",
        date: "January 28, 2025",
        region: "Asia",
        location: "Ladakh, Jammu and Kashmir, India",
        duration: "7 Days",
        budget: "$$$",
        readTime: "7 min read",
        image: "images/post_ladakh.jpg",
        description: "Trek the barren high-altitude deserts of Ladakh. Visit the grand Thiksey Monastery, cross Khardung La pass, and view the blue waters of Pangong Tso.",
        content: `
            <p>Ladakh is unlike any other place in India. Situated in the rain shadow of the Himalayas, it is a high-altitude cold desert of bare rock, wind-swept gravel, and blindingly blue salt lakes, punctuated by green river valleys and white Buddhist stupas.</p>
            <p>We based ourselves in Leh, resting for two days to adapt to the thin air at 11,500 feet. Our first excursion was to the Thiksey Monastery, a twelve-story whitewashed complex built on a rocky hill that closely resembles the Potala Palace in Lhasa. Standing in the temple room, listening to the low, echoing drone of the long horns played by monks during morning prayers, was deeply moving.</p>
            <p>We then drove over the Khardung La pass—one of the highest motorable roads in the world at 17,582 feet—into the Nubra Valley, where Bactrian two-humped camels roam the sand dunes. We finished our trip at Pangong Tso, a 134-kilometer-long lake that changes color from turquoise to deep indigo depending on the angle of the sun. Ladakh is raw, majestic, and spiritual.</p>
        `,
        comments: [
            { name: "Norbu L.", text: "Ladakh is a paradise! Proud to see my home represented so beautifully.", time: "1 week ago" }
        ]
    },
    {
        id: 20,
        title: "The Capital Chronicles: Red Fort, Qutub Minar & Jantar Mantar",
        author: "Devendra Verma",
        authorInitials: "DV",
        date: "January 04, 2025",
        region: "Asia",
        location: "Delhi, India",
        duration: "3 Days",
        budget: "$",
        readTime: "6 min read",
        image: "images/post_delhifort.jpg",
        description: "Journey through Delhi's historical empires. Explore the colossal Red Fort, the soaring Qutub Minar, and the massive stone sundials of Jantar Mantar.",
        content: `
            <p>Delhi is a city built on the ruins of seven historical capitals. It is a place where ancient stone domes sit next to modern metro lines, and chaotic spice markets terminate in wide, tree-lined avenues.</p>
            <p>I started my journey at the Red Fort (Lal Qila), built in 1639 by Emperor Shah Jahan as the seat of the Mughal Empire. Its massive walls of red sandstone stretch for over two kilometers, enclosing grand halls like the Diwan-i-Aam (Hall of Public Audience) where the Peacock Throne once stood. Standing before the Lahori Gate, you can feel the weight of India's history.</p>
            <p>Next, I visited the Qutub Minar in South Delhi. Rising to 72.5 meters, it is the tallest brick minaret in the world, built in 1192 by Qutb-ud-din Aibak. Its fluted red sandstone blocks are covered in delicate carvings of Quranic inscriptions and floral motifs. Finally, I walked through the bizarre geometric shapes of Jantar Mantar—a collection of 13 stone architectural astronomy instruments built by Maharaja Jai Singh II in 1724, which still measure time with incredible accuracy.</p>
        `,
        comments: [
            { name: "Meenakshi K.", text: "The historical layers of Delhi are indeed endless. Great summary!", time: "3 days ago" }
        ]
    },
    {
        id: 21,
        title: "The Untamed East: Living Bridges & Green Hills of the Seven Sisters",
        author: "Lobsang Sangma",
        authorInitials: "LS",
        date: "December 12, 2024",
        region: "Asia",
        location: "Northeast India",
        duration: "10 Days",
        budget: "$$",
        readTime: "8 min read",
        image: "images/post_kyoto.jpg",
        description: "Explore India's greenest frontier. Walk the living root bridges of Meghalaya, visit Assam's tea estates, and discover the rolling hills of Mizoram, Nagaland, and Arunachal.",
        content: `
            <p>Northeast India—the 'Seven Sisters' states of Assam, Meghalaya, Mizoram, Nagaland, Arunachal Pradesh, Tripura, and Manipur—is a green frontier of dense rainforests, high mountains, and rich tribal cultures.</p>
            <p>My journey started in Meghalaya, the 'Abode of Clouds'. In the wet valleys of Cherrapunji, I hiked down 3,000 stone steps to see the double-decker living root bridges. Grown slowly by the Khasi tribes over decades by training the roots of the Ficus elastica tree across rushing streams, these bridges are natural, breathing engineering wonders that grow stronger with age.</p>
            <p>In Assam, we cruised the Brahmaputra River and walked through bright green tea estates. In Nagaland, we learned about the warrior histories of the Angami tribes in Kohima, and in Arunachal Pradesh, we visited the massive Tawang Monastery perched at 10,000 feet near the Tibetan border. Northeast India is an untouched paradise of mist, music, and green canyons.</p>
        `,
        comments: [
            { name: "Jahnvi D.", text: "Northeast India is so green and beautiful. Truly the lungs of our country!", time: "2 weeks ago" }
        ]
    }
];

// Photo Gallery Items
const galleryPhotos = [
    { src: "images/post_kyoto.jpg", title: "Zen Pathway", location: "Kyoto, Japan" },
    { src: "images/post_swiss.jpg", title: "Alpine Crossing", location: "Swiss Alps" },
    { src: "images/post_sahara.jpg", title: "Golden Ripples", location: "Sahara Desert" },
    { src: "images/post_amalfi.jpg", title: "Positano Sunsets", location: "Amalfi Coast, Italy" },
    { src: "images/post_patagonia.jpg", title: "Patagonia Peaks", location: "Patagonia, Argentina" },
    { src: "images/post_newyork.jpg", title: "Manhattan Skylines", location: "New York City, USA" },
    { src: "images/post_sydney.jpg", title: "Harbour Sunsets", location: "Sydney, Australia" },
    { src: "images/post_india.jpg", title: "Taj Mahal Sunrise", location: "Agra, Uttar Pradesh, India" },
    { src: "images/post_charminar.jpg", title: "Charminar at Twilight", location: "Hyderabad, India" },
    { src: "images/post_meenakshi.jpg", title: "Gopuram Carvings", location: "Madurai, India" },
    { src: "images/post_ladakh.jpg", title: "Himalayan Monasteries", location: "Ladakh, India" },
    { src: "images/post_delhifort.jpg", title: "Red Fort Gateways", location: "Delhi, India" },
    { src: "images/post_dwarka.jpg", title: "Dwarkadhish Temple", location: "Dwarka, Gujarat, India" },
    { src: "images/post_varanasi.jpg", title: "Varanasi Ghats", location: "Varanasi, Uttar Pradesh, India" },
    { src: "images/post_vizag.png", title: "RK Beach Road Skyline", location: "Visakhapatnam, Andhra Pradesh, India" },
    { src: "images/post_trivandrum.png", title: "Padmanabhaswamy Temple", location: "Thiruvananthapuram, Kerala, India" },
    { src: "images/post_goabeach.png", title: "Untouched Goa Beaches", location: "Goa, India" },
    { src: "images/hero_bg.jpg", title: "Mountain Sunrises", location: "Coastal Range" }
];

// Travel Quotes
const quotes = [
    { text: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
    { text: "The world is a book and those who do not travel read only one page.", author: "Saint Augustine" },
    { text: "Travel makes one modest. You see what a tiny place you occupy in the world.", author: "Gustave Flaubert" },
    { text: "To travel is to live.", author: "Hans Christian Andersen" },
    { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
    { text: "We travel not to escape life, but for life not to escape us.", author: "Anonymous" },
    { text: "Take only memories, leave only footprints.", author: "Chief Seattle" }
];

// Global filters state
let activeFilter = 'all';
let searchQuery = '';
let activeMapDestination = '';
let currentLightboxIndex = 0;

// --- DYNAMIC RENDERING ---

// Initialize Page Elements
document.addEventListener("DOMContentLoaded", () => {
    renderBlogGrid();
    renderGalleryGrid();
    initNavbarScroll();
    initStatsCounter();
    initTheme();
    initQuotes();
    initMapInteraction();
    initForm();
    initGlobalSearch();
    initNavigationScrollSpy();
});

// Render Blog Cards Grid
function renderBlogGrid() {
    const grid = document.getElementById("blog-grid");
    const noResults = document.getElementById("no-results");
    grid.innerHTML = "";
    
    // Filter posts based on search query, map pins, and category buttons
    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeFilter === 'all' || post.region.toLowerCase() === activeFilter.toLowerCase();
        
        const matchesSearch = searchQuery === '' || 
            post.title.toLowerCase().includes(searchQuery) ||
            post.location.toLowerCase().includes(searchQuery) ||
            post.description.toLowerCase().includes(searchQuery) ||
            post.region.toLowerCase().includes(searchQuery) ||
            post.author.toLowerCase().includes(searchQuery);
            
        const matchesMap = activeMapDestination === '' || post.location.toLowerCase().includes(activeMapDestination.toLowerCase());
        
        return matchesCategory && matchesSearch && matchesMap;
    });

    if (filteredPosts.length === 0) {
        grid.style.display = "none";
        noResults.style.display = "block";
    } else {
        grid.style.display = "grid";
        noResults.style.display = "none";
        
        filteredPosts.forEach(post => {
            const card = document.createElement("article");
            card.className = "blog-card";
            card.innerHTML = `
                <div class="card-img-wrapper">
                    <img class="card-img" src="${post.image}" alt="${post.title}" loading="lazy">
                    <span class="card-badge">${post.region}</span>
                </div>
                <div class="card-content">
                    <div class="card-meta">
                        <span><i class="fa-solid fa-location-dot"></i> ${post.location}</span>
                        <span><i class="fa-regular fa-clock"></i> ${post.readTime}</span>
                    </div>
                    <h3 class="card-title">${post.title}</h3>
                    <p class="card-desc">${post.description}</p>
                    <div class="card-footer">
                        <div class="card-author">
                            <div class="author-avatar">${post.authorInitials}</div>
                            <span class="author-name">${post.author}</span>
                        </div>
                        <a href="javascript:void(0)" class="read-more-link" onclick="openArticleModal(${post.id})">
                            Read Story <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }
}

// Render Gallery Masonry Grid
function renderGalleryGrid() {
    const grid = document.getElementById("gallery-grid");
    grid.innerHTML = "";
    
    galleryPhotos.forEach((photo, idx) => {
        const item = document.createElement("div");
        item.className = "gallery-item";
        item.onclick = () => openLightbox(idx);
        item.innerHTML = `
            <img src="${photo.src}" alt="${photo.title}" loading="lazy">
            <div class="gallery-overlay">
                <h4 class="gallery-title">${photo.title}</h4>
                <span class="gallery-location"><i class="fa-solid fa-location-dot"></i> ${photo.location}</span>
            </div>
        `;
        grid.appendChild(item);
    });
}

// Stats Counter animation
function initStatsCounter() {
    const stats = document.querySelectorAll(".stat-number");
    
    const animateStats = () => {
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute("data-val"));
            let current = 0;
            const duration = 1500; // milliseconds
            const increment = target / (duration / 16); // ~60fps
            
            const updateCount = () => {
                current += increment;
                if (current < target) {
                    stat.innerText = Math.floor(current);
                    requestAnimationFrame(updateCount);
                } else {
                    stat.innerText = target + (stat.getAttribute("data-val") === "120" ? "+" : "");
                }
            };
            updateCount();
        });
    };
    
    // Intersection Observer to run when section comes into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(document.querySelector(".hero-stats"));
}

// Navbar scroll action
function initNavbarScroll() {
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
    
    // Mobile navigation toggler
    const mobileToggle = document.getElementById("mobile-toggle");
    const navLinks = document.getElementById("nav-links");
    
    mobileToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        const icon = mobileToggle.querySelector("i");
        if (navLinks.classList.contains("active")) {
            icon.className = "fa-solid fa-xmark";
        } else {
            icon.className = "fa-solid fa-bars";
        }
    });
    
    // Close mobile nav when link is clicked
    document.querySelectorAll(".nav-link, .nav-btn-share").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            mobileToggle.querySelector("i").className = "fa-solid fa-bars";
        });
    });
}

// --- FILTER & SEARCH CONTROLS ---

// Set up Global Search
function initGlobalSearch() {
    const searchInput = document.getElementById("global-search");
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderBlogGrid();
    });
    
    // Category Button Filters
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeFilter = btn.getAttribute("data-filter");
            renderBlogGrid();
        });
    });
    
    // Clear Filters Button
    const clearBtn = document.getElementById("clear-filters-btn");
    clearBtn.addEventListener("click", () => {
        activeFilter = 'all';
        searchQuery = '';
        activeMapDestination = '';
        searchInput.value = '';
        
        filterBtns.forEach(b => b.classList.remove("active"));
        document.querySelector("[data-filter='all']").classList.add("active");
        
        document.querySelectorAll(".map-pin").forEach(p => p.classList.remove("active"));
        
        renderBlogGrid();
    });
}

// Interactive Map Pins
function initMapInteraction() {
    const pins = document.querySelectorAll(".map-pin");
    pins.forEach(pin => {
        pin.addEventListener("click", () => {
            const destName = pin.getAttribute("data-destination");
            
            // Toggle active map pin
            if (pin.classList.contains("active")) {
                pin.classList.remove("active");
                activeMapDestination = '';
            } else {
                pins.forEach(p => p.classList.remove("active"));
                pin.classList.add("active");
                activeMapDestination = destName;
            }
            
            // Re-render and scroll down to the blog section
            renderBlogGrid();
            document.getElementById("blog-section").scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// --- MODALS (ARTICLE & LIGHTBOX) ---

// Open Full Blog Article
function openArticleModal(id) {
    const post = blogPosts.find(p => p.id === id);
    if (!post) return;
    
    document.getElementById("modal-hero-img").style.backgroundImage = `url('${post.image}')`;
    document.getElementById("modal-region").innerText = post.region;
    document.getElementById("modal-read-time").innerHTML = `<i class="fa-regular fa-clock"></i> ${post.readTime}`;
    document.getElementById("modal-title").innerText = post.title;
    document.getElementById("modal-author-avatar").innerText = post.authorInitials;
    document.getElementById("modal-author-name").innerText = post.author;
    document.getElementById("modal-date").innerText = post.date;
    document.getElementById("modal-location").innerText = post.location;
    document.getElementById("modal-duration").innerText = post.duration;
    document.getElementById("modal-budget").innerText = post.budget;
    document.getElementById("modal-text").innerHTML = post.content;
    
    // Save post reference for comment forms
    document.getElementById("article-modal").setAttribute("data-current-id", id);
    
    renderComments(post);
    
    document.getElementById("article-modal").classList.add("active");
    document.body.style.overflow = "hidden"; // Disable background scrolling
}

function closeArticleModal() {
    document.getElementById("article-modal").classList.remove("active");
    document.body.style.overflow = "";
}

// Comments rendering inside modal
function renderComments(post) {
    const commentsList = document.getElementById("comments-list");
    const countSpan = document.getElementById("comment-count");
    
    commentsList.innerHTML = "";
    countSpan.innerText = post.comments.length;
    
    if (post.comments.length === 0) {
        commentsList.innerHTML = `<p class="text-muted" style="font-style: italic;">No comments yet. Be the first to share your thoughts!</p>`;
    } else {
        post.comments.forEach(comment => {
            const firstLetter = comment.name.charAt(0).toUpperCase();
            const div = document.createElement("div");
            div.className = "comment-item";
            div.innerHTML = `
                <div class="comment-avatar">${firstLetter}</div>
                <div>
                    <div class="comment-header">
                        <span class="comment-user">${comment.name}</span>
                        <span class="comment-time">${comment.time}</span>
                    </div>
                    <p class="comment-content">${comment.text}</p>
                </div>
            `;
            commentsList.appendChild(div);
        });
    }
}

// Handling Comment Submissions
const commentForm = document.getElementById("comment-form");
commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const postId = parseInt(document.getElementById("article-modal").getAttribute("data-current-id"));
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;
    
    const nameInput = document.getElementById("comment-name");
    const textInput = document.getElementById("comment-text");
    
    const newComment = {
        name: nameInput.value.trim(),
        text: textInput.value.trim(),
        time: "Just now"
    };
    
    post.comments.push(newComment);
    renderComments(post);
    
    // Clear inputs
    nameInput.value = "";
    textInput.value = "";
});

// Lightbox modal logic
// Lightbox modal logic
function openLightbox(index) {
    currentLightboxIndex = index;
    const photo = galleryPhotos[index];
    
    document.getElementById("lightbox-img").src = photo.src;
    document.getElementById("lightbox-caption").innerHTML = `<strong>${photo.title}</strong> — ${photo.location}`;
    
    document.getElementById("lightbox-modal").classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    document.getElementById("lightbox-modal").classList.remove("active");
    document.body.style.overflow = "";
}

function nextLightboxImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryPhotos.length;
    openLightbox(currentLightboxIndex);
}

function prevLightboxImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
    openLightbox(currentLightboxIndex);
}

// Handle Esc Key to close modals
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeArticleModal();
        closeLightbox();
    }
});

// --- SUBMIT EXPERIENCES FORM ---

function initForm() {
    const form = document.getElementById("story-form");
    const countrySelect = document.getElementById("form-country");
    const stateGroup = document.getElementById("state-group");
    const stateSelect = document.getElementById("form-state");

    // Dynamic state dropdown visibility for India
    countrySelect.addEventListener("change", () => {
        if (countrySelect.value === "India") {
            stateGroup.style.display = "flex";
            stateSelect.setAttribute("required", "required");
        } else {
            stateGroup.style.display = "none";
            stateSelect.removeAttribute("required");
            stateSelect.value = "";
        }
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const title = document.getElementById("form-title").value.trim();
        const author = document.getElementById("form-author").value.trim();
        const region = document.getElementById("form-region").value;
        const country = countrySelect.value;
        const state = stateSelect.value;
        const city = document.getElementById("form-location").value.trim();
        const durationNum = document.getElementById("form-duration").value;
        const duration = durationNum ? `${durationNum} Days` : "Varies";
        const budget = document.getElementById("form-budget").value;
        const contentVal = document.getElementById("form-content").value.trim();
        
        // Selected Image Option
        const selectedImgInput = document.querySelector('input[name="form-image"]:checked');
        const image = selectedImgInput ? selectedImgInput.value : "images/post_swiss.jpg";
        
        // Generate Author Initials
        const initials = author.split(" ").map(n => n[0]).join("").toUpperCase().substring(0, 2);
        
        // Calculate dynamic reading time based on text length (~200 wpm)
        const wordCount = contentVal.split(/\s+/).length;
        const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;
        
        // Format content text as paragraph elements
        const formattedContent = contentVal.split('\n\n').map(pText => `<p>${pText.replace(/\n/g, '<br>')}</p>`).join('');
        
        // Construct Location string
        let location = city;
        if (country === "India") {
            location = `${city}, ${state}, India`;
        } else if (country && country !== "Other") {
            location = `${city}, ${country}`;
        }
        
        // Create new Post Object
        const newPost = {
            id: blogPosts.length + 1,
            title: title,
            author: author,
            authorInitials: initials || "TR",
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            region: region,
            location: location,
            duration: duration,
            budget: budget,
            readTime: readTime,
            image: image,
            description: contentVal.substring(0, 150) + (contentVal.length > 150 ? '...' : ''),
            content: formattedContent,
            comments: []
        };
        
        // Add to posts stack at the beginning
        blogPosts.unshift(newPost);
        
        // Reset Form and State fields
        form.reset();
        stateGroup.style.display = "none";
        stateSelect.removeAttribute("required");
        
        // Re-render blog grid
        renderBlogGrid();
        
        // Scroll to blog grid to show the newly added story
        document.getElementById("blog-section").scrollIntoView({ behavior: 'smooth' });
        
        // Show simulated notification alert
        alert(`Success! Your story "${title}" has been published to the community feed.`);
    });
    
    // Newsletter simulated submit
    const newsletter = document.getElementById("newsletter-form");
    const status = document.getElementById("newsletter-status");
    newsletter.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("news-email").value;
        
        status.innerText = "Subscribing...";
        status.className = "newsletter-status";
        
        setTimeout(() => {
            status.innerText = "Subscribed successfully! Welcome to Wanderscape.";
            status.classList.add("success");
            document.getElementById("news-email").value = "";
            
            setTimeout(() => {
                status.innerText = "";
                status.className = "newsletter-status";
            }, 4000);
        }, 1200);
    });
}

// --- DYNAMIC QUOTE GENERATOR ---

function initQuotes() {
    let currentIdx = 0;
    const textDisplay = document.getElementById("quote-display");
    const authorDisplay = document.getElementById("quote-author");
    const newBtn = document.getElementById("new-quote-btn");
    
    newBtn.addEventListener("click", () => {
        // Quick fade-out/fade-in transitions
        textDisplay.style.opacity = 0;
        authorDisplay.style.opacity = 0;
        
        setTimeout(() => {
            currentIdx = (currentIdx + 1) % quotes.length;
            textDisplay.innerText = `"${quotes[currentIdx].text}"`;
            authorDisplay.innerText = `— ${quotes[currentIdx].author}`;
            
            textDisplay.style.opacity = 1;
            authorDisplay.style.opacity = 1;
        }, 250);
    });
}

// --- THEME MANAGEMENT ---

function initTheme() {
    const themeBtn = document.getElementById("theme-toggle");
    const darkIcon = themeBtn.querySelector(".theme-icon-dark");
    const lightIcon = themeBtn.querySelector(".theme-icon-light");
    
    const savedTheme = localStorage.getItem("wanderscape-theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeUI(savedTheme);
    
    themeBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const targetTheme = currentTheme === "dark" ? "light" : "dark";
        
        document.documentElement.setAttribute("data-theme", targetTheme);
        localStorage.setItem("wanderscape-theme", targetTheme);
        updateThemeUI(targetTheme);
    });
    
    function updateThemeUI(theme) {
        if (theme === "dark") {
            darkIcon.style.display = "none";
            lightIcon.style.display = "block";
            lightIcon.style.color = "var(--accent)";
        } else {
            darkIcon.style.display = "block";
            lightIcon.style.display = "none";
            darkIcon.style.color = "var(--accent)";
        }
    }
}

// --- SCROLL NAV SPY ---

function initNavigationScrollSpy() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("header, section");
    
    window.addEventListener("scroll", () => {
        let currentSection = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                currentSection = section.getAttribute("id");
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("data-target") === currentSection) {
                link.classList.add("active");
            }
        });
    });
}
