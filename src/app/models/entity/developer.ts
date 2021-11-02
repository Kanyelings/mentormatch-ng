/**
 * @author Ndalle Joy
 * Modified by: Elroy Kanye
 *
 * Container for the developers' information.
 * Consists of helper interfaces and a repository with the hard coded information required.
 */
export class Developer {
  private mentorImageDir = "assets/img/mentors/";
  name: string = "";
  imagePath: string = "";
  job: string = "";
  position: string = "";
  quote: string = "";
  handles: Handles;
  socials: SocialLinks;

  constructor(name: string, imagePath: string, job: string, position: string, quote: string, handles: Handles) {
    this.name = name;
    this.imagePath = this.mentorImageDir.concat(imagePath);
    this.job = job;
    this.position = position;
    this.quote = quote;
    this.handles = handles;
    this.socials = Developer.getCompleteSocialLinks(this.handles);
  }

  private static getCompleteSocialLinks(initial: Handles): SocialLinks {
    let facebookDomain: string = "https://www.facebook.com/";
    let twitterDomain: string = "https://www.instagram.com/";
    let instaDomain: string = "https://www.instagram.com/";
    let linkedinDomain: string = "https://www.linkedin.com/in/";
    return {
      facebook: facebookDomain.concat(initial.facebook),
      twitter: twitterDomain.concat(initial.twitter),
      instagram: instaDomain.concat(initial.instagram),
      linkedin: linkedinDomain.concat(initial.linkedin)
    }
  }
}

interface Handles {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
}
interface SocialLinks extends Handles{}

const QUOTES: string[] = [
  "I don't have much to say",
  "I am a civil techie. I can build things with my hands.",
  "It is only when they go wrong that machines remind you how powerful they are.",
  "Coding is a privilege, but that privilege is not available to most Cameroonians.",
  "I don't like programming. It is tedious. But I sure as hell love it when it works!",
  "Maybe I am emblem of an old era and I have to move on.",
]
export const DEVELOPERS = [
  {
    name: "elroykanye",
    info: new Developer(
      "Elroy Kanye",
      "elroykanye.jpg",
      "Jack Developer",
      "The Kanye",
      QUOTES[0],
      {
        facebook: "elroykanye2.0",
        twitter: "elroykanye",
        instagram: "elroykanye2.0",
        linkedin: "elroy-kanye"
      }
    ),
  },
  {
    name: "joy",
    info: new Developer(
      "Joy Ngum",
      "ndallejoy.jpg",
      "Management",
      "Mentor",
      QUOTES[1],
      {
        facebook: "profile.php?id=100008694064842",
        twitter: "ndallejoy775",
        instagram: "joyndalle",
        linkedin: "joy-ngum=ndalle-a7b70a164"
      }
    ),
  },
  {
    name: "telmah",
    info: new Developer(
      "Tantoh Telmah",
      "tantohtelmah.jpg",
      "JavaEE",
      "Kanyeling",
      QUOTES[2],
      {
        facebook: "tantoh.telmah",
        twitter: "TelmahTantoh",
        instagram: "afrrican_telmah",
        linkedin: "tantoh-telmah-058054202"
      }
    )
  },
  {
    name: "chelsea",
    info: new Developer(
      "Chelsea Banke",
      "chelseabanke.jpg",
      "Web (Backend)",
      "Kanyeling",
      QUOTES[3],
      {
        facebook: "chelsea.banke",
        twitter: "ChelseaBanke",
        instagram: "7banke",
        linkedin: "chelsea-banke-65218120a"
      }
    ),
  },
  {
    name: "emy",
    info: new Developer(
      "Njong Emy",
      "njongemy.jpg",
      "Web (Frontend)",
      "Kanyeling",
      QUOTES[4],
      {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: ""
      }
    ),
  },
  {
    name: "favour",
    info: new Developer(
      "Favour Fombi",
      "njongemy.jpg",
      "Web (Frontend)",
      "Kanyeling",
      QUOTES[5],
      {
        facebook: "fombi.favour",
        twitter: "FavourFombi",
        instagram: "fombifavour",
        linkedin: "fombi-favour"
      }
    ),
  }
]




