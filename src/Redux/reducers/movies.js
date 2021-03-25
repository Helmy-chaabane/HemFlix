import { createSlice } from "@reduxjs/toolkit";
import collateralCover from "../../Images/collateral_cover.jpg";
import titanicCover from "../../Images/titanic_cover.jpg";
import chukkyCover from "../../Images/chukky_cover.jpg";
import shrekCover from "../../Images/shrek_cover.jpg";
import harryCover from "../../Images/harry_cover.jpg";
import dictatorCover from "../../Images/dictator_cover.jpg";
import splitCover from "../../Images/split_cover.jpg";
import sawCover from "../../Images/saw_cover.jpg";
import conjuringCover from "../../Images/conjuring_cover.jpg";
import breathCover from "../../Images/breath_cover.jpg";
import extractionCover from "../../Images/extraction_cover.jpg";
import teamCover from "../../Images/team_cover.jpg";
import dragonCover from "../../Images/dragon_cover.jpg";
import zooCover from "../../Images/zoo_cover.jpg";
import transformersCover from "../../Images/transformers_cover.jpg";
import kungfuCover from "../../Images/kungfu_cover.jpg";
import godfadherCover from "../../Images/godfadher_cover.jpg";
import venomCover from "../../Images/venom_cover.jpg";
import attackCover from "../../Images/attack_cover.jpg";
import collateralImage from "../../Images/collateral_bigCover.jpg";
import titanicImage from "../../Images/titanic_bigCover.jpg";
import chukkyImage from "../../Images/chukky_bigCover.jpg";
import shrekImage from "../../Images/shrek_bigCover.jpg";
import harryImage from "../../Images/harry_bigCover.jpg";
import dictatorImage from "../../Images/dictator_bigCover.jpg";
import splitImage from "../../Images/split_bigCover.jpg";
import sawImage from "../../Images/saw_bigCover.jpg";
import conjuringImage from "../../Images/conjuring_bigCover.jpg";
import breathImage from "../../Images/breath_bigCover.jpg";
import extractionImage from "../../Images/extraction_bigCover.jpg";
import teamImage from "../../Images/team_bigCover.png";
import dragonImage from "../../Images/dragon_bigCover.jpg";
import zooImage from "../../Images/zoo_bigCover.jpg";
import transformersImage from "../../Images/transformers_bigCover.jpg";
import kungfuImage from "../../Images/kungfu_bigCover.jpg";
import godfadherImage from "../../Images/godfadher_bigCover.jpg";
import venomImage from "../../Images/venom_bigCover.jpg";
import attackImage from "../../Images/attack_bigCover.jpg";

const slice = createSlice({
  name: "data",
  initialState: {
    movies: [
      {
        id: 1,
        liked: true,
        genre: "action",
        title: "Collateral",
        cover: collateralCover,
        bigImage: collateralImage,
        description: `A contract killer named Vincent (Tom Cruise) hires a cab driver for a journey into a physical and psychological netherworld. "Collateral" opens with Tom Cruise exchanging briefcases with a stranger in an airport.`,
      },
      {
        id: 2,
        liked: false,
        genre: "drama",
        title: "Titanic",
        cover: titanicCover,
        bigImage: titanicImage,
        description:
          "After winning a trip on the RMS Titanic during a dockside card game, American Jack Dawson spots the society girl Rose DeWitt Bukater who is on her way to Philadelphia to marry her rich snob fiancé Caledon Hockley. Rose feels helplessly trapped by her situation and makes her way to the aft deck and thinks of suicide until she is rescued by Jack. Cal is therefore obliged to invite Jack to dine at their first-class table where he suffers through the slights of his snobbish hosts. ",
      },

      {
        id: 3,
        liked: false,
        genre: "horror",
        title: "bride of chukky",
        cover: chukkyCover,
        bigImage: chukkyImage,
        description:
          "Bride of Chucky is a 1998 American black comedy slasher film written by Don Mancini and directed by Ronny Yu. The fourth installment in the Child's Play franchise, it stars Jennifer Tilly as the voice of Tiffany, Brad Dourif as the voice of Chucky, John Ritter, Katherine Heigl, and Nick Stabile.",
      },
      {
        id: 4,
        liked: true,
        genre: "animation",
        title: "Shreck",
        cover: shrekCover,
        bigImage: shrekImage,
        description:
          "It's the story of a terrifying green ogre by the name of Shrek, who lives in a swamp. But all of the sudden, the evil Lord Farquaad banishes a bunch of fairy tale creatures to Shrek's swamp. So Shrek now must go on a quest to save Princess Fiona, along with a fast-talking donkey whose name is literally Donkey in order to get his swamp back.",
      },
      {
        id: 5,
        liked: true,
        genre: "fantasy",
        title: "Harry Potter and the Half-Blood Prince",
        cover: harryCover,
        bigImage: harryImage,
        description:
          " Harry Potter's sixth year at Hogwarts, Lord Voldemort is definitely back, and with a vengeance. Harry finds his world is yet again changing: wizards and witches and Muggles alike are dying, despite the efforts of the Ministry of Magic and the Order of the Phoenix. Despite the danger, Harry and his best friends, Ron and Hermione, return to the familiar life of Hogwarts for their sixth year. They find yet another Defence Against the Dark Arts teacher: Professor Snape. They begin their N.E.W.T. classes in preparation for life after Hogwarts, and Harry gets some much needed Potions help from the mysterious Half-Blood Prince. Quidditch is as popular as ever, Harry is nominated as Gryffindor Quidditch Captain.",
      },
      {
        id: 6,
        liked: false,
        genre: "comedy",
        title: "The Dictator",
        cover: dictatorCover,
        bigImage: dictatorImage,
        description: `For years, the fictional North African nation of the Republic of Wadiya has been ruled by Admiral-General Haffaz Aladeen, a childish, tyrannical, sexist, anti-Western, and antisemitic dictator who surrounds himself with female bodyguards, sponsors terrorism (especially giving shelter to al-Qaeda leader Osama Bin Laden after "they killed his double one year ago"), changes many words in the Wadiyan dictionary to "Aladeen", and is working on developing nuclear weapons to attack Israel. He also refuses to sell Wadiya's oil fields, a promise he made to his father prior to his death. After the United Nations Security Council resolves to intervene militarily, Aladeen travels to the UN Headquarters in New York City to address the council.`,
      },
      {
        id: 7,
        liked: false,
        genre: "horror",
        title: "SPLIT",
        cover: splitCover,
        bigImage: splitImage,
        description: `Kevin Wendell Crumb / Dennis / Patricia / Hedwig / Barry / Orwell / Jade / The Horde: a sufferer of dissociative identity disorder (DID), who has 23 prominent personalities, each possessing a peculiarity or posing a danger to his captives. His body chemistry changes with each personality, resulting in his 24th and final personality, "The Beast", a grotesque sociopath and insatiable cannibal with superhuman capabilities, such as inhuman bodily strength, enhanced speed and agility, along with near-invulnerability and unnatural mobility, to the point of being able to scale walls and ceilings`,
      },
      {
        id: 8,
        liked: false,
        genre: "horror",
        title: "SAW",
        description:
          "Two strangers awaken in a room with no recollection of how they got there, and soon discover they're pawns in a deadly game perpetrated by a notorious serial killer. Waking up in a bathroom, two men, Adam and Dr. Lawrence Gordon, discover they have been captured by the infamous Jigsaw Killer.",
        cover: sawCover,
        bigImage: sawImage,
      },
      {
        id: 9,
        liked: true,
        genre: "horror",
        title: "Conjuring",
        description:
          "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse. In 1971, Carolyn and Roger Perron move their family into a dilapidated Rhode Island farm house and soon strange things start happening around it with escalating nightmarish terror.",
        cover: conjuringCover,
        bigImage: conjuringImage,
      },
      {
        id: 10,
        liked: true,
        genre: "horror",
        title: "Dont breath",
        description:
          "Rocky, Alex, and Money are three Detroit delinquents who make a living by breaking into houses and stealing valuables. Rocky longs to move to California with her younger sister, Diddy, and escape from their abusive mother and her alcoholic boyfriend. However, to the trio's frustration, their fence keeps undervaluing the items they bring. Money receives a tip from their fence that Gulf War veteran Norman Nordstrom has $300,000 in cash in his house in an abandoned Detroit neighborhood. The cash was reportedly a settlement after a wealthy young woman, Cindy Roberts, killed his daughter in a car accident. The three spy on the house and learn that Nordstrom is blind.",
        cover: breathCover,
        bigImage: breathImage,
      },
      {
        id: 11,
        liked: false,
        genre: "action",
        title: "Extraction",
        description:
          "After a day at school, Ovi Mahajan – son of an incarcerated Indian drug lord – sneaks out of his house to visit a club, where he is kidnapped by police officers working for rival drug lord Amir Asif. Saju Rav, a former Para (SF) operator and Ovi's protector, visits Ovi’s father in prison. Unwilling to pay the ransom as it will hurt his prestige, Ovi Mahajan Sr. orders Saju to retrieve his son, threatening Saju's own family.",
        cover: extractionCover,
        bigImage: extractionImage,
      },

      {
        id: 12,
        liked: true,
        genre: "action",
        title: "Team A",
        description: `John "Hannibal" Smith is held captive in Mexico by two Federal Police officers working for renegade General Javier Tuco. Hannibal escapes and sets out to rescue his friend Templeton "Face" Peck, who is held captive at Tuco's ranch. Hannibal saves Face after enlisting his teammate Ranger, B.A. Baracus, driving to the rescue in BA's modified GMC Vandura. Pursued by Tuco, they stop at a nearby Army Hospital to recruit the services of their pilot Howling Mad Murdock. They flee in a medical helicopter, chased by Tuco, in a dogfight that leaves BA with a phobia of flying. The battle ends when they lure Tuco's helicopter into American airspace, where it is shot down by an F-22 Raptor for trespassing, killing Tuco and his men.`,
        cover: teamCover,
        bigImage: teamImage,
      },

      {
        id: 13,
        liked: true,
        genre: "animation",
        title: "How to train your dragon",
        description: `The viking village of Clan Berk, located on a remote island, is attacked frequently by Dragons, which take livestock, damage property and endanger lives. Hiccup, the awkward fifteen-year-old son of the village chieftain, Stoick the Vast, is deemed too scrawny and weak to fight the dragons, so he instead creates mechanical devices under his apprenticeship with Gobber, the village blacksmith, though Hiccup's inventions often backfire. During one attack, Hiccup uses a bolas launcher to shoot down a Night Fury, a dangerous and rare dragon of which little is known, but no one believes him, so he searches for the fallen dragon on his own. He finds the dragon in the forest, tangled in his net, but cannot bring himself to kill him, and instead sets him free.`,
        cover: dragonCover,
        bigImage: dragonImage,
      },
      {
        id: 14,
        liked: false,
        genre: "animation",
        title: "Zootopia",
        description: `In a world of anthropomorphic mammals, rabbit Judy Hopps from rural Bunnyburrow fulfills her childhood dream of becoming a police officer in urban Zootopia. Despite being the academy valedictorian, Judy is delegated to parking duty by Chief Bogo, who doubts her potential because she is a rabbit. On her first day, she is hustled by a con artist fox duo, Nick Wilde and Finnick. Judy abandons parking duty to arrest Duke Weaselton, a weasel who stole a bag of crocus bulbs known as Midnicampum holicithias. Bogo reprimands her, but an otter, Mrs. Otterton, enters Bogo's office pleading for someone to find her husband Emmitt, one of fourteen animals who are missing. When Judy volunteers and Assistant Mayor Dawn Bellwether praises the assignment, Bogo has no choice but to give Judy the case, stipulating she has 48 hours to find Emmitt Otterton and that she must resign if she fails.`,
        cover: zooCover,
        bigImage: zooImage,
      },
      {
        id: 15,
        liked: true,
        genre: "fantasy",
        title: "Transformers",
        description: `Thousand of years ago, the planet Cybertron was consumed by a civil war between the two Transformer factions, the Autobots led by Optimus Prime and the Decepticons led by Megatron. The Autobots want to find the All Spark so they can use it to rebuild Cybertron and end the war between the Autobots and the Decepticons, while the Decepticons want to use it to defeat the Autobots and conquer the universe. Megatron found the All Spark on Earth, but crash-landed in the Arctic Circle and was frozen in the ice. Captain Archibald Witwicky and his crew of explorers stumbled upon Megatron's body in 1897. Captain Witwicky accidentally activated Megatron's navigational system and his eye glasses were imprinted with the coordinates of the All Spark's location. Sector 7, a secret United States government organization, discovered the All Spark in the Colorado river and built the Hoover Dam around it to mask its energy emissions. The still-frozen Megatron was moved into this facility and was reverse engineered to advance human technology.`,
        cover: transformersCover,
        bigImage: transformersImage,
      },
      {
        id: 16,
        liked: true,
        genre: "comedy",
        title: "Kung Fu Hustle",
        description: `Infuriated by the loss of his men, Brother Sum captures Sing and Bone, intending to kill them for posing as gang members. Sing narrowly frees themselves with his lock-picking skills, impressing Brother Sum, who allows them to join the gang on the condition that they kill someone. Lamenting his failure, Sing relives his childhood to Bone: he was duped into believing he was a natural-born kung fu genius by a vagrant selling a martial arts pamphlet, and as a result he gave the vagrant his meager savings to purchase the pamphlet. Sing practiced the Buddhist Palm technique and attempted to save Fong, a mute girl, from bullies, only to be beaten himself and humiliated when the bullies point out the pamphlet costs a mere 20 cents. Sing then became adamant the good guys never win and resolved to be a villain.`,
        cover: kungfuCover,
        bigImage: kungfuImage,
      },
      {
        id: 17,
        liked: true,
        genre: "drama",
        title: "The godfadher",
        description: `The Corleone family patriarch is Vito Corleone (The Don), whose surname (Italian for "Lionheart") recalls the town of Corleone, Sicily. His birth name is Vittorio Andolini, but after emigrating to America, he changed it to the name of his home village as one of his few acts of sentimentality. Vito fathered four children: Santino "Sonny" Corleone, Frederico "Fredo" Corleone, Michael "Mike" Corleone, and Constanzia "Connie" Corleone. He also has an informally adopted son, Thomas "Tom" Hagen, who became the Corleone Family's consigliere (counselor). Vito Corleone is also godfather to the famous singer and movie star Johnny Fontane. The godfather referred to in the title is generally taken to be Vito. However, the story's main character is Michael Corleone. The novel's central storyline details Michael's destiny to succeed his father as the head of the family empire, despite his desire to lead an Americanized life with his girlfriend (and eventual wife) Kay Adams.`,
        cover: godfadherCover,
        bigImage: godfadherImage,
      },
      {
        id: 18,
        liked: false,
        genre: "fantasy",
        title: "Venom",
        description: `The Corleone family patriarch is Vito Corleone (The Don), whose surname (Italian for "Lionheart") recalls the town of Corleone, Sicily. His birth name is Vittorio Andolini, but after emigrating to America, he changed it to the name of his home village as one of his few acts of sentimentality. Vito fathered four children: Santino "Sonny" Corleone, Frederico "Fredo" Corleone, Michael "Mike" Corleone, and Constanzia "Connie" Corleone. He also has an informally adopted son, Thomas "Tom" Hagen, who became the Corleone Family's consigliere (counselor). Vito Corleone is also godfather to the famous singer and movie star Johnny Fontane. The godfather referred to in the title is generally taken to be Vito. However, the story's main character is Michael Corleone. The novel's central storyline details Michael's destiny to succeed his father as the head of the family empire, despite his desire to lead an Americanized life with his girlfriend (and eventual wife) Kay Adams.`,
        cover: venomCover,
        bigImage: venomImage,
      },
      {
        id: 19,
        liked: true,
        genre: "anime",
        title: "Attack On Titan",
        description: `The Corleone family patriarch is Vito Corleone (The Don), whose surname (Italian for "Lionheart") recalls the town of Corleone, Sicily. His birth name is Vittorio Andolini, but after emigrating to America, he changed it to the name of his home village as one of his few acts of sentimentality. Vito fathered four children: Santino "Sonny" Corleone, Frederico "Fredo" Corleone, Michael "Mike" Corleone, and Constanzia "Connie" Corleone. He also has an informally adopted son, Thomas "Tom" Hagen, who became the Corleone Family's consigliere (counselor). Vito Corleone is also godfather to the famous singer and movie star Johnny Fontane. The godfather referred to in the title is generally taken to be Vito. However, the story's main character is Michael Corleone. The novel's central storyline details Michael's destiny to succeed his father as the head of the family empire, despite his desire to lead an Americanized life with his girlfriend (and eventual wife) Kay Adams.`,
        cover: attackCover,
        bigImage: attackImage,
      },
    ],
    currentGenre: "horror",
  },
  reducers: {
    LIKING_MOVIE: (data, action) => {
      const index = data.movies.findIndex(
        (movie) => movie.id === action.payload.id
      );
      data.movies[index].liked = !data.movies[index].liked;
    },

    CHANGE_GENRE: (data, action) => {
      data.currentGenre = action.payload.genre;
    },
  },
});

export const { LIKING_MOVIE, CHANGE_GENRE } = slice.actions;
export default slice.reducer;
