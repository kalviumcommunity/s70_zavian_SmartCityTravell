
import { City, Attraction, Itinerary, UserPreference } from "../types";

// Mock data for cities
const cities: City[] = [
  {
    id: "delhi",
    name: "Delhi",
    country: "India",
    description: "India's capital territory is a massive metropolitan area and the heart of the nation, blending ancient monuments with colonial architecture and modern developments.",
    imageUrl: "/assets/delhi.jpg",
    rating: 4.6,
    categories: ["History", "Culture", "Food", "Heritage"],
    attractions: [
      {
        id: "red-fort",
        name: "Red Fort",
        description: "UNESCO World Heritage site built in the 17th century, this imposing red sandstone fort was the main residence of the Mughal emperors.",
        imageUrl: "/assets/red-fort.jpg",
        category: "History",
        rating: 4.7,
        price: "₹35",
        duration: "2-3 hours",
        location: "Chandni Chowk",
        coordinates: {
          lat: 28.6562,
          lng: 77.2410
        }
      },
      {
        id: "qutub-minar",
        name: "Qutub Minar",
        description: "UNESCO World Heritage site featuring a 73-meter tall tower of victory, built in 1193.",
        imageUrl: "/assets/qutub-minar.jpg",
        category: "History",
        rating: 4.8,
        price: "₹30",
        duration: "1-2 hours",
        location: "Mehrauli",
        coordinates: {
          lat: 28.5245,
          lng: 77.1855
        }
      },
      {
        id: "india-gate",
        name: "India Gate",
        description: "A war memorial dedicated to the soldiers of the British Indian Army who died in the First World War.",
        imageUrl: "/assets/india-gate.jpg",
        category: "Landmark",
        rating: 4.6,
        price: "Free",
        duration: "1 hour",
        location: "Rajpath",
        coordinates: {
          lat: 28.6129,
          lng: 77.2295
        }
      },
      {
        id: "delhi-food-tour",
        name: "Old Delhi Food Tour",
        description: "Experience the rich culinary heritage of Delhi with street food delicacies like Chole Bhature, Parathas, and Jalebi.",
        imageUrl: "/assets/delhi-food.jpg",
        category: "Food",
        rating: 4.9,
        price: "₹2000",
        duration: "3-4 hours",
        location: "Chandni Chowk",
        coordinates: {
          lat: 28.6507,
          lng: 77.2334
        }
      }
    ],
    weather: {
      temperature: 32,
      condition: "Sunny",
      icon: "sun"
    },
    coordinates: {
      lat: 28.6139,
      lng: 77.2090
    }
  },
  {
    id: "jaipur",
    name: "Jaipur",
    country: "India",
    description: "Known as the 'Pink City', Jaipur is famous for its stunning pink-hued buildings, vibrant culture, and royal heritage as part of India's Golden Triangle.",
    imageUrl: "/assets/jaipur.jpg",
    rating: 4.7,
    categories: ["Heritage", "Culture", "Architecture", "Shopping"],
    attractions: [
      {
        id: "amber-fort",
        name: "Amber Fort",
        description: "A majestic fort overlooking Maota Lake, known for its artistic Hindu style elements with large ramparts and gates.",
        imageUrl: "/assets/amber-fort.jpg",
        category: "Heritage",
        rating: 4.8,
        price: "₹200",
        duration: "3 hours",
        location: "Amer",
        coordinates: {
          lat: 26.9855,
          lng: 75.8513
        }
      },
      {
        id: "hawa-mahal",
        name: "Hawa Mahal",
        description: "The 'Palace of Winds' built in 1799, features a distinctive honeycomb facade with 953 small windows.",
        imageUrl: "/assets/hawa-mahal.jpg",
        category: "Architecture",
        rating: 4.7,
        price: "₹50",
        duration: "1 hour",
        location: "Old City",
        coordinates: {
          lat: 26.9239,
          lng: 75.8267
        }
      },
      {
        id: "city-palace",
        name: "City Palace",
        description: "A complex of courtyards, gardens and buildings, a part of which is still a royal residence.",
        imageUrl: "/assets/city-palace.jpg",
        category: "Heritage",
        rating: 4.6,
        price: "₹500",
        duration: "2-3 hours",
        location: "Old City",
        coordinates: {
          lat: 26.9258,
          lng: 75.8237
        }
      },
      {
        id: "rajasthani-cuisine",
        name: "Rajasthani Cuisine Experience",
        description: "Taste authentic Rajasthani dishes like Dal Baati Churma, Gatte ki Sabzi, and Pyaaz Kachori.",
        imageUrl: "/assets/rajasthan-food.jpg",
        category: "Food",
        rating: 4.9,
        price: "₹1500",
        duration: "2 hours",
        location: "Various locations",
        coordinates: {
          lat: 26.9124,
          lng: 75.7873
        }
      }
    ],
    weather: {
      temperature: 33,
      condition: "Sunny",
      icon: "sun"
    },
    coordinates: {
      lat: 26.9124,
      lng: 75.7873
    }
  },
  {
    id: "varanasi",
    name: "Varanasi",
    country: "India",
    description: "One of the world's oldest continuously inhabited cities and a major religious hub in India, situated on the banks of the sacred Ganges River.",
    imageUrl: "/assets/varanasi.jpg",
    rating: 4.8,
    categories: ["Spiritual", "Culture", "History", "Heritage"],
    attractions: [
      {
        id: "ghats",
        name: "Ghats of Varanasi",
        description: "Series of steps leading down to the Ganges River where pilgrims perform ritual ablutions and various ceremonies.",
        imageUrl: "/assets/varanasi-ghats.jpg",
        category: "Spiritual",
        rating: 4.9,
        price: "Free",
        duration: "3-4 hours",
        location: "Ganges Riverfront",
        coordinates: {
          lat: 25.3176,
          lng: 82.9739
        }
      },
      {
        id: "kashi-vishwanath",
        name: "Kashi Vishwanath Temple",
        description: "One of the most famous Hindu temples dedicated to Lord Shiva, and one of the twelve Jyotirlingas.",
        imageUrl: "/assets/kashi-vishwanath.jpg",
        category: "Spiritual",
        rating: 4.8,
        price: "Free",
        duration: "1-2 hours",
        location: "Vishwanath Gali",
        coordinates: {
          lat: 25.3109,
          lng: 83.0107
        }
      },
      {
        id: "evening-aarti",
        name: "Ganga Aarti",
        description: "Spectacular evening ritual with fire and chanting performed on the banks of the river Ganges.",
        imageUrl: "/assets/ganga-aarti.jpg",
        category: "Culture",
        rating: 4.9,
        price: "Free",
        duration: "1 hour",
        location: "Dashashwamedh Ghat",
        coordinates: {
          lat: 25.3055,
          lng: 83.0175
        }
      },
      {
        id: "banarasi-cuisine",
        name: "Banarasi Food Trail",
        description: "Sample local delicacies like Banarasi Paan, Kachori Sabzi, Thandai, and the famous local sweets.",
        imageUrl: "/assets/banarasi-food.jpg",
        category: "Food",
        rating: 4.7,
        price: "₹1000",
        duration: "3 hours",
        location: "Old City",
        coordinates: {
          lat: 25.3176,
          lng: 82.9739
        }
      }
    ],
    weather: {
      temperature: 30,
      condition: "Partly Cloudy",
      icon: "cloud-sun"
    },
    coordinates: {
      lat: 25.3176,
      lng: 82.9739
    }
  },
  {
    id: "mumbai",
    name: "Mumbai",
    country: "India",
    description: "India's financial powerhouse and entertainment capital, Mumbai is a vibrant metropolis with a rich colonial history, bustling markets, and the glamour of Bollywood.",
    imageUrl: "/assets/mumbai.jpg",
    rating: 4.7,
    categories: ["Urban", "Food", "Culture", "Beach"],
    attractions: [
      {
        id: "gateway-of-india",
        name: "Gateway of India",
        description: "Iconic monument built during the British Raj, this basalt arch overlooks the Arabian Sea.",
        imageUrl: "/assets/gateway-of-india.jpg",
        category: "Landmark",
        rating: 4.7,
        price: "Free",
        duration: "1 hour",
        location: "Apollo Bunder",
        coordinates: {
          lat: 18.9220,
          lng: 72.8347
        }
      },
      {
        id: "marine-drive",
        name: "Marine Drive",
        description: "A 3.6 km long boulevard along the coastline that offers stunning views of the sunset.",
        imageUrl: "/assets/marine-drive.jpg",
        category: "Urban",
        rating: 4.8,
        price: "Free",
        duration: "2 hours",
        location: "Netaji Subhash Chandra Bose Road",
        coordinates: {
          lat: 18.9442,
          lng: 72.8237
        }
      },
      {
        id: "mumbai-street-food",
        name: "Mumbai Street Food Tour",
        description: "Sample iconic Mumbai street foods like Vada Pav, Pav Bhaji, Bhel Puri, and Mumbai Sandwich.",
        imageUrl: "/assets/mumbai-food.jpg",
        category: "Food",
        rating: 4.9,
        price: "₹1500",
        duration: "3 hours",
        location: "Various locations",
        coordinates: {
          lat: 19.0760,
          lng: 72.8777
        }
      }
    ],
    weather: {
      temperature: 28,
      condition: "Humid",
      icon: "cloud"
    },
    coordinates: {
      lat: 19.0760,
      lng: 72.8777
    }
  },
  {
    id: "kolkata",
    name: "Kolkata",
    country: "India",
    description: "The cultural capital of India, Kolkata retains its colonial-era architecture, offers a vibrant art scene, and is known for its passion for literature, food, and festivals.",
    imageUrl: "/assets/kolkata.jpg",
    rating: 4.6,
    categories: ["Culture", "Food", "Heritage", "Arts"],
    attractions: [
      {
        id: "victoria-memorial",
        name: "Victoria Memorial",
        description: "Majestic marble building dedicated to Queen Victoria, now functioning as a museum.",
        imageUrl: "/assets/victoria-memorial.jpg",
        category: "Heritage",
        rating: 4.8,
        price: "₹30",
        duration: "2 hours",
        location: "Queen's Way",
        coordinates: {
          lat: 22.5448,
          lng: 88.3426
        }
      },
      {
        id: "howrah-bridge",
        name: "Howrah Bridge",
        description: "Iconic cantilever bridge over the Hooghly River, one of the busiest bridges in the world.",
        imageUrl: "/assets/howrah-bridge.jpg",
        category: "Landmark",
        rating: 4.7,
        price: "Free",
        duration: "30 minutes",
        location: "Hooghly River",
        coordinates: {
          lat: 22.5851,
          lng: 88.3468
        }
      },
      {
        id: "bengali-cuisine",
        name: "Bengali Food Experience",
        description: "Taste authentic Bengali dishes like Rasgulla, Mishti Doi, Fish Curry, and Kosha Mangsho.",
        imageUrl: "/assets/bengali-food.jpg",
        category: "Food",
        rating: 4.9,
        price: "₹1200",
        duration: "2-3 hours",
        location: "Various locations",
        coordinates: {
          lat: 22.5726,
          lng: 88.3639
        }
      }
    ],
    weather: {
      temperature: 29,
      condition: "Humid",
      icon: "cloud"
    },
    coordinates: {
      lat: 22.5726,
      lng: 88.3639
    }
  },
  {
    id: "agra",
    name: "Agra",
    country: "India",
    description: "Home to the iconic Taj Mahal, Agra is a historical city with Mughal-era architecture, delectable cuisine, and rich cultural heritage.",
    imageUrl: "/assets/agra.jpg",
    rating: 4.8,
    categories: ["Heritage", "History", "Architecture", "Culture"],
    attractions: [
      {
        id: "taj-mahal",
        name: "Taj Mahal",
        description: "UNESCO World Heritage site and one of the Seven Wonders of the World, this ivory-white marble mausoleum was built by Emperor Shah Jahan in memory of his wife.",
        imageUrl: "/assets/taj-mahal.jpg",
        category: "Heritage",
        rating: 5.0,
        price: "₹1100",
        duration: "3-4 hours",
        location: "Dharmapuri, Forest Colony",
        coordinates: {
          lat: 27.1751,
          lng: 78.0421
        }
      },
      {
        id: "agra-fort",
        name: "Agra Fort",
        description: "UNESCO World Heritage site, this red sandstone fort was the imperial residence of the Mughal Dynasty.",
        imageUrl: "/assets/agra-fort.jpg",
        category: "Heritage",
        rating: 4.7,
        price: "₹550",
        duration: "2-3 hours",
        location: "Rakabganj",
        coordinates: {
          lat: 27.1784,
          lng: 78.0214
        }
      },
      {
        id: "agra-cuisine",
        name: "Agra Food Tour",
        description: "Taste the famous Mughlai cuisine including Petha, Dalmoth, Kebabs, and Biryani.",
        imageUrl: "/assets/agra-food.jpg",
        category: "Food",
        rating: 4.6,
        price: "₹1000",
        duration: "2 hours",
        location: "Various locations",
        coordinates: {
          lat: 27.1767,
          lng: 78.0081
        }
      }
    ],
    weather: {
      temperature: 31,
      condition: "Sunny",
      icon: "sun"
    },
    coordinates: {
      lat: 27.1767,
      lng: 78.0081
    }
  },
  {
    id: "goa",
    name: "Goa",
    country: "India",
    description: "India's beach paradise known for its pristine shorelines, vibrant nightlife, water sports, and Portuguese-influenced culture and architecture.",
    imageUrl: "/assets/goa.jpg",
    rating: 4.7,
    categories: ["Beach", "Nightlife", "Adventure", "Culture"],
    attractions: [
      {
        id: "baga-beach",
        name: "Baga Beach",
        description: "Popular beach known for its lively atmosphere, water sports, and beachside shacks.",
        imageUrl: "/assets/baga-beach.jpg",
        category: "Beach",
        rating: 4.6,
        price: "Free",
        duration: "Half day",
        location: "North Goa",
        coordinates: {
          lat: 15.5553,
          lng: 73.7509
        }
      },
      {
        id: "basilica-of-bom-jesus",
        name: "Basilica of Bom Jesus",
        description: "UNESCO World Heritage site, this baroque architecture houses the mortal remains of St. Francis Xavier.",
        imageUrl: "/assets/basilica-bom-jesus.jpg",
        category: "Heritage",
        rating: 4.7,
        price: "Free",
        duration: "1-2 hours",
        location: "Old Goa",
        coordinates: {
          lat: 15.5009,
          lng: 73.9125
        }
      },
      {
        id: "goan-cuisine",
        name: "Goan Food Experience",
        description: "Taste authentic Goan dishes like Vindaloo, Xacuti, Fish Curry Rice, and Bebinca.",
        imageUrl: "/assets/goan-food.jpg",
        category: "Food",
        rating: 4.8,
        price: "₹1500",
        duration: "2 hours",
        location: "Various locations",
        coordinates: {
          lat: 15.2993,
          lng: 74.1240
        }
      }
    ],
    weather: {
      temperature: 29,
      condition: "Partly Cloudy",
      icon: "cloud-sun"
    },
    coordinates: {
      lat: 15.2993,
      lng: 74.1240
    }
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    country: "India",
    description: "The City of Pearls blends centuries-old history with a booming tech sector, offering magnificent monuments, delectable Hyderabadi cuisine, and vibrant cultural experiences.",
    imageUrl: "/assets/hyderabad.jpg",
    rating: 4.6,
    categories: ["History", "Food", "Culture", "Technology"],
    attractions: [
      {
        id: "charminar",
        name: "Charminar",
        description: "Iconic monument and mosque built in 1591, this four-arched structure is the centerpiece of the old city.",
        imageUrl: "/assets/charminar.jpg",
        category: "Landmark",
        rating: 4.7,
        price: "₹35",
        duration: "1-2 hours",
        location: "Charminar Road",
        coordinates: {
          lat: 17.3616,
          lng: 78.4747
        }
      },
      {
        id: "golconda-fort",
        name: "Golconda Fort",
        description: "Ancient fort known for its acoustics, palaces, and ingenious water supply system.",
        imageUrl: "/assets/golconda-fort.jpg",
        category: "Heritage",
        rating: 4.6,
        price: "₹40",
        duration: "3 hours",
        location: "Ibrahim Bagh",
        coordinates: {
          lat: 17.3833,
          lng: 78.4011
        }
      },
      {
        id: "hyderabadi-biryani",
        name: "Hyderabadi Biryani Experience",
        description: "Taste the world-famous Hyderabadi Biryani along with Haleem, Qubani ka Meetha, and Irani Chai.",
        imageUrl: "/assets/hyderabadi-biryani.jpg",
        category: "Food",
        rating: 4.9,
        price: "₹1000",
        duration: "2 hours",
        location: "Various locations",
        coordinates: {
          lat: 17.3850,
          lng: 78.4867
        }
      }
    ],
    weather: {
      temperature: 27,
      condition: "Sunny",
      icon: "sun"
    },
    coordinates: {
      lat: 17.3850,
      lng: 78.4867
    }
  },
  {
    id: "chennai",
    name: "Chennai",
    country: "India",
    description: "A major cultural, economic, and educational center in South India, Chennai blends traditional Tamil culture with modern urban development and beautiful beaches.",
    imageUrl: "/assets/chennai.jpg",
    rating: 4.5,
    categories: ["Culture", "Beach", "Heritage", "Food"],
    attractions: [
      {
        id: "marina-beach",
        name: "Marina Beach",
        description: "One of the longest urban beaches in the world stretching over 13 km along the Bay of Bengal.",
        imageUrl: "/assets/marina-beach.jpg",
        category: "Beach",
        rating: 4.6,
        price: "Free",
        duration: "2-3 hours",
        location: "Kamarajar Salai",
        coordinates: {
          lat: 13.0500,
          lng: 80.2824
        }
      },
      {
        id: "kapaleeshwarar-temple",
        name: "Kapaleeshwarar Temple",
        description: "Ancient Dravidian-style temple dedicated to Lord Shiva, known for its colorful gopuram.",
        imageUrl: "/assets/kapaleeshwarar-temple.jpg",
        category: "Spiritual",
        rating: 4.7,
        price: "Free",
        duration: "1-2 hours",
        location: "Mylapore",
        coordinates: {
          lat: 13.0337,
          lng: 80.2707
        }
      },
      {
        id: "tamil-cuisine",
        name: "South Indian Food Trail",
        description: "Taste authentic Tamil cuisine including Idli, Dosa, Filter Coffee, and Chettinad specialties.",
        imageUrl: "/assets/tamil-food.jpg",
        category: "Food",
        rating: 4.8,
        price: "₹800",
        duration: "2 hours",
        location: "Various locations",
        coordinates: {
          lat: 13.0827,
          lng: 80.2707
        }
      }
    ],
    weather: {
      temperature: 30,
      condition: "Humid",
      icon: "cloud-sun"
    },
    coordinates: {
      lat: 13.0827,
      lng: 80.2707
    }
  },
  {
    id: "udaipur",
    name: "Udaipur",
    country: "India",
    description: "Known as the 'City of Lakes', Udaipur is a romantic destination with scenic lake palaces, ornate temples, and majestic havelis set against the backdrop of the Aravalli Range.",
    imageUrl: "/assets/udaipur.jpg",
    rating: 4.8,
    categories: ["Heritage", "Romantic", "Culture", "Lakes"],
    attractions: [
      {
        id: "lake-palace",
        name: "Lake Palace",
        description: "Luxury hotel located on an island in Lake Pichola, once a royal summer palace built in white marble.",
        imageUrl: "/assets/lake-palace.jpg",
        category: "Heritage",
        rating: 4.9,
        price: "Viewable from outside",
        duration: "1 hour",
        location: "Lake Pichola",
        coordinates: {
          lat: 24.5762,
          lng: 73.6811
        }
      },
      {
        id: "city-palace",
        name: "City Palace",
        description: "Massive palace complex with museums showcasing artifacts, paintings, and royal memorabilia.",
        imageUrl: "/assets/udaipur-city-palace.jpg",
        category: "Heritage",
        rating: 4.8,
        price: "₹300",
        duration: "3 hours",
        location: "Old City",
        coordinates: {
          lat: 24.5764,
          lng: 73.6858
        }
      },
      {
        id: "rajasthani-cuisine-udaipur",
        name: "Rajasthani Cuisine in Udaipur",
        description: "Experience traditional Mewari cuisine including Dal Baati Churma, Laal Maas, and Ghevar.",
        imageUrl: "/assets/mewari-food.jpg",
        category: "Food",
        rating: 4.7,
        price: "₹1200",
        duration: "2 hours",
        location: "Various locations",
        coordinates: {
          lat: 24.5854,
          lng: 73.7125
        }
      }
    ],
    weather: {
      temperature: 28,
      condition: "Sunny",
      icon: "sun"
    },
    coordinates: {
      lat: 24.5854,
      lng: 73.7125
    }
  },
  {
    id: "amritsar",
    name: "Amritsar",
    country: "India",
    description: "The spiritual and cultural center of the Sikh religion, Amritsar is home to the magnificent Golden Temple, vibrant markets, and the historic Wagah Border ceremony.",
    imageUrl: "/assets/amritsar.jpg",
    rating: 4.8,
    categories: ["Spiritual", "Culture", "Food", "History"],
    attractions: [
      {
        id: "golden-temple",
        name: "Golden Temple (Harmandir Sahib)",
        description: "The holiest gurdwara in Sikhism, known for its stunning golden structure surrounded by a sacred pool.",
        imageUrl: "/assets/golden-temple.jpg",
        category: "Spiritual",
        rating: 5.0,
        price: "Free",
        duration: "3-4 hours",
        location: "Golden Temple Road",
        coordinates: {
          lat: 31.6200,
          lng: 74.8765
        }
      },
      {
        id: "jallianwala-bagh",
        name: "Jallianwala Bagh",
        description: "Historic garden and memorial of the 1919 massacre under British rule.",
        imageUrl: "/assets/jallianwala-bagh.jpg",
        category: "History",
        rating: 4.6,
        price: "Free",
        duration: "1 hour",
        location: "Golden Temple Road",
        coordinates: {
          lat: 31.6210,
          lng: 74.8801
        }
      },
      {
        id: "punjabi-cuisine",
        name: "Punjabi Food Experience",
        description: "Taste authentic Punjabi dishes like Amritsari Kulcha, Butter Chicken, Lassi, and Phirni.",
        imageUrl: "/assets/punjabi-food.jpg",
        category: "Food",
        rating: 4.9,
        price: "₹1000",
        duration: "2 hours",
        location: "Various locations",
        coordinates: {
          lat: 31.6340,
          lng: 74.8723
        }
      }
    ],
    weather: {
      temperature: 25,
      condition: "Clear",
      icon: "sun"
    },
    coordinates: {
      lat: 31.6340,
      lng: 74.8723
    }
  },
  {
    id: "rishikesh",
    name: "Rishikesh",
    country: "India",
    description: "Known as the 'Yoga Capital of the World', Rishikesh is a spiritual hub nestled in the foothills of the Himalayas along the sacred Ganges River, offering adventure sports, meditation centers, and stunning natural beauty.",
    imageUrl: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
    rating: 4.8,
    categories: ["Spiritual", "Adventure", "Yoga", "Nature"],
    attractions: [
      {
        id: "laxman-jhula",
        name: "Laxman Jhula",
        description: "Iconic iron suspension bridge across the River Ganges, named after Lord Rama's brother Laxman who is said to have crossed the river on a jute rope.",
        imageUrl: "https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        category: "Landmark",
        rating: 4.6,
        price: "Free",
        duration: "1 hour",
        location: "Tehri Garhwal",
        coordinates: {
          lat: 30.1220,
          lng: 78.3299
        }
      },
      {
        id: "river-rafting",
        name: "White Water Rafting",
        description: "Experience thrilling rapids on the Ganges River with grades ranging from 3-5, suitable for beginners and experienced rafters.",
        imageUrl: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        category: "Adventure",
        rating: 4.9,
        price: "₹1500-2500",
        duration: "2-4 hours",
        location: "Various starting points",
        coordinates: {
          lat: 30.1087,
          lng: 78.3260
        }
      },
      {
        id: "triveni-ghat",
        name: "Triveni Ghat",
        description: "Sacred bathing spot where three rivers meet. Famous for its evening Ganga Aarti (prayer ceremony) and peaceful atmosphere.",
        imageUrl: "https://images.unsplash.com/photo-1626168139126-3b89e181e938?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        category: "Spiritual",
        rating: 4.7,
        price: "Free",
        duration: "1-2 hours",
        location: "Rishikesh",
        coordinates: {
          lat: 30.1070,
          lng: 78.3063
        }
      },
      {
        id: "beatles-ashram",
        name: "Beatles Ashram",
        description: "Abandoned meditation center where The Beatles stayed in 1968, now covered in artistic graffiti and offering peaceful meditation spaces.",
        imageUrl: "https://images.unsplash.com/photo-1604873366942-0c7972c40884?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        category: "Culture",
        rating: 4.5,
        price: "₹600",
        duration: "2-3 hours",
        location: "Swarg Ashram",
        coordinates: {
          lat: 30.1033,
          lng: 78.3150
        }
      }
    ],
    weather: {
      temperature: 25,
      condition: "Sunny",
      icon: "sun"
    },
    coordinates: {
      lat: 30.1087,
      lng: 78.2932
    }
  },
  {
    id: "darjeeling",
    name: "Darjeeling",
    country: "India",
    description: "Nestled in the Himalayan foothills, this hill station is famous for its tea plantations, stunning views of Mount Kanchenjunga, colonial architecture, and the historic Darjeeling Himalayan Railway.",
    imageUrl: "https://images.unsplash.com/photo-1544662751-64955ef5b8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    rating: 4.7,
    categories: ["Nature", "Culture", "Tea", "Heritage"],
    attractions: [
      {
        id: "tiger-hill",
        name: "Tiger Hill",
        description: "Famous viewpoint offering breathtaking sunrise views over Mount Kanchenjunga and the eastern Himalayas.",
        imageUrl: "https://images.unsplash.com/photo-1581326525839-e06a6c6c885a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        category: "Nature",
        rating: 4.9,
        price: "₹50",
        duration: "2-3 hours",
        location: "11 km from Darjeeling",
        coordinates: {
          lat: 27.0472,
          lng: 88.2631
        }
      },
      {
        id: "tea-gardens",
        name: "Happy Valley Tea Estate",
        description: "One of the oldest and most famous tea gardens offering tours of the plantation and tea processing facilities with tea tasting.",
        imageUrl: "https://images.unsplash.com/photo-1523920290222-241d2f3c80c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        category: "Tea",
        rating: 4.7,
        price: "₹100",
        duration: "1-2 hours",
        location: "Lebong",
        coordinates: {
          lat: 27.0542,
          lng: 88.2615
        }
      },
      {
        id: "toy-train",
        name: "Darjeeling Himalayan Railway",
        description: "UNESCO World Heritage Site, this narrow-gauge railway (known as the 'Toy Train') offers a scenic journey through the mountains.",
        imageUrl: "https://images.unsplash.com/photo-1602517127208-9e4fc309e1a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        category: "Heritage",
        rating: 4.8,
        price: "₹1300",
        duration: "2 hours (joy ride)",
        location: "Darjeeling Railway Station",
        coordinates: {
          lat: 27.0431,
          lng: 88.2636
        }
      },
      {
        id: "himalayan-zoo",
        name: "Padmaja Naidu Himalayan Zoological Park",
        description: "Specialized zoo focused on breeding programs for endangered Himalayan species including the red panda and snow leopard.",
        imageUrl: "https://images.unsplash.com/photo-1588127333419-b9d7de223dcf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        category: "Nature",
        rating: 4.6,
        price: "₹100",
        duration: "2-3 hours",
        location: "Jawahar Parbat",
        coordinates: {
          lat: 27.0499,
          lng: 88.2537
        }
      }
    ],
    weather: {
      temperature: 15,
      condition: "Foggy",
      icon: "cloud"
    },
    coordinates: {
      lat: 27.0360,
      lng: 88.2627
    }
  },
  {
    id: "kochi",
    name: "Kochi",
    country: "India",
    description: "This historic port city in Kerala showcases a unique blend of Dutch, Portuguese, and British colonial influences alongside traditional South Indian culture, famous for its Chinese fishing nets, ancient synagogues, and vibrant art scene.",
    imageUrl: "https://images.unsplash.com/photo-1590123717647-43cb1fe68db1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    rating: 4.6,
    categories: ["Culture", "History", "Coastal", "Food"],
    attractions: [
      {
        id: "chinese-fishing-nets",
        name: "Chinese Fishing Nets",
        description: "Iconic fishing structures introduced by Chinese explorers in the 14th century, still used by local fishermen and best viewed at sunset.",
        imageUrl: "https://images.unsplash.com/photo-1593693858797-75a8a57c3911?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        category: "Culture",
        rating: 4.7,
        price: "Free",
        duration: "1 hour",
        location: "Fort Kochi",
        coordinates: {
          lat: 9.9673,
          lng: 76.2432
        }
      },
      {
        id: "jew-town",
        name: "Jew Town & Paradesi Synagogue",
        description: "Historic neighborhood with the oldest active synagogue in the Commonwealth, surrounded by antique shops and spice markets.",
        imageUrl: "https://images.unsplash.com/photo-1584805644116-e13bfc95979e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        category: "Heritage",
        rating: 4.6,
        price: "₹10 (Synagogue entry)",
        duration: "2 hours",
        location: "Mattancherry",
        coordinates: {
          lat: 9.9569,
          lng: 76.2594
        }
      },
      {
        id: "kathakali",
        name: "Kerala Kathakali Centre",
        description: "Cultural center showcasing Kerala's traditional dance-drama with elaborate costumes and makeup.",
        imageUrl: "https://images.unsplash.com/photo-1582801363095-f1ff244a6b1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        category: "Culture",
        rating: 4.8,
        price: "₹350",
        duration: "2 hours",
        location: "Fort Kochi",
        coordinates: {
          lat: 9.9639,
          lng: 76.2426
        }
      },
      {
        id: "kerala-cuisine",
        name: "Kerala Seafood Experience",
        description: "Sample authentic Kerala seafood dishes like Karimeen Pollichathu (pearl spot fish), prawn curry, and fish molee with appam.",
        imageUrl: "https://images.unsplash.com/photo-1613682988402-12e25b5d2218?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        category: "Food",
        rating: 4.9,
        price: "₹1000-1500",
        duration: "2 hours",
        location: "Various restaurants",
        coordinates: {
          lat: 9.9651,
          lng: 76.2535
        }
      }
    ],
    weather: {
      temperature: 30,
      condition: "Partly Cloudy",
      icon: "cloud-sun"
    },
    coordinates: {
      lat: 9.9312,
      lng: 76.2673
    }
  }
];

// Now initialize the cities without using additionalCities
// Remove this line that was causing the error:
// cities.push(...additionalCities);

export const getCities = (): Promise<City[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cities);
    }, 500);
  });
};

export const getCity = (id: string): Promise<City | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cities.find(city => city.id === id));
    }, 300);
  });
};

export const searchCities = (query: string): Promise<City[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = cities.filter(city => 
        city.name.toLowerCase().includes(query.toLowerCase()) || 
        city.country.toLowerCase().includes(query.toLowerCase()) ||
        city.categories.some(cat => cat.toLowerCase().includes(query.toLowerCase()))
      );
      resolve(results);
    }, 300);
  });
};

// AI mock function for generating recommendations
export const getRecommendations = (preferences: UserPreference[]): Promise<City[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simple algorithm to match preferences to cities
      const scoredCities = cities.map(city => {
        let score = 0;
        
        preferences.forEach(pref => {
          if (city.categories.some(cat => cat.toLowerCase() === pref.category.toLowerCase())) {
            score += pref.level;
          }
        });
        
        return { city, score };
      });
      
      // Sort by score and return top cities
      const recommended = scoredCities
        .sort((a, b) => b.score - a.score)
        .filter(item => item.score > 0)
        .map(item => item.city);
      
      resolve(recommended.length > 0 ? recommended : cities.slice(0, 3));
    }, 800);
  });
};

// AI mock function for generating an itinerary
export const generateItinerary = (cityId: string, days: number, preferences: UserPreference[]): Promise<Itinerary> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const city = cities.find(c => c.id === cityId);
      
      if (!city) {
        throw new Error("City not found");
      }
      
      // Create a simple itinerary based on available attractions
      const itineraryDays = Array.from({ length: days }, (_, i) => {
        // Simple algorithm to distribute attractions
        const dayAttractions = city.attractions.filter((_, index) => index % days === i);
        
        return {
          day: i + 1,
          attractions: dayAttractions,
          morningActivity: dayAttractions[0],
          afternoonActivity: dayAttractions[1] || dayAttractions[0],
          eveningActivity: dayAttractions[2] || dayAttractions[0]
        };
      });
      
      resolve({
        cityId,
        days: itineraryDays,
        totalCost: `₹${Math.floor(5000 + Math.random() * 10000) * days}`
      });
    }, 1000);
  });
};
