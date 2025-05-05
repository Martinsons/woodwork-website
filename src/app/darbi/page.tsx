'use client';

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface WorkItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: "mājas zīmes" | "mēbeles" | "dekorācijas";
}

const workItems: WorkItem[] = [
  {
    id: 1,
    title: "Mājas zīme \"Ozolkalns\"",
    description: "Ozolkoka mājas zīme ar gravētu nosaukumu un mājas numuru, pārklāta ar ūdensizturīgu laku.",
    imageUrl: "/works/482301682_1198037755185350_1762068951578885760_n.jpg",
    category: "mājas zīmes",
  },
  {
    id: 2,
    title: "Koka plāksne \"Sveiki mājās\"",
    description: "Priedes koka dekoratīva plāksne ar rokām apgleznotu tekstu un ornamentiem.",
    imageUrl: "/works/467018247_17958776261837115_5826561839191707556_n.jpg",
    category: "dekorācijas",
  },
  {
    id: 3,
    title: "Ozolkoka kafijas galdiņš",
    description: "Elegants un izturīgs ozolkoka kafijas galdiņš ar unikālu tekstūru un individuālu dizainu.",
    imageUrl: "/works/481153374_1192535599068899_6161729925117165000_n.jpg",
    category: "mēbeles",
  },
  {
    id: 4,
    title: "Reljefa mājas zīme",
    description: "Reljefa mājas zīme ar trīsdimensiju efektu un kontrastējošu krāsu.",
    imageUrl: "/works/482809426_1198038018518657_8635422232515087104_n.jpg",
    category: "mājas zīmes",
  },
  {
    id: 5,
    title: "Roku darināts koka krēsls",
    description: "Ērts un izturīgs koka krēsls ar ergonomisku dizainu un rūpīgu roku darba apdari.",
    imageUrl: "/works/466774992_17958776435837115_35665328581374259_n.jpg",
    category: "mēbeles",
  },
  {
    id: 6,
    title: "Minimālisma stila mājas numurs",
    description: "Moderns un vienkāršs dizains ar skaidri redzamiem cipariem, pielāgots pilsētas dzīvoklim.",
    imageUrl: "/works/477441462_1180892976899828_1141581060237245716_n.jpg",
    category: "mājas zīmes",
  },
  {
    id: 7,
    title: "Koka pulkstenis ar dabisko malu",
    description: "Unikāls sienas pulkstenis ar saglabātu koka dabisko malu, kas pievieno telpām dabisku akcentu.",
    imageUrl: "/works/482271542_1198038021851990_8879561520875790612_n.jpg",
    category: "dekorācijas",
  },
  {
    id: 8,
    title: "Masīvkoka plaukts",
    description: "Funkcionāls un elegants masīvkoka plaukts ar redzamiem dabiskiem koka gadskārtu rakstiem.",
    imageUrl: "/works/481153374_1192535599068899_6161729925117165000_n.jpg",
    category: "mēbeles",
  },
  {
    id: 9,
    title: "Personalizēta koka dāvanu kaste",
    description: "Īpaši veidota koka dāvanu kaste ar personalizētu gravējumu īpašiem dzīves notikumiem.",
    imageUrl: "/works/467018247_17958776261837115_5826561839191707556_n.jpg",
    category: "dekorācijas",
  },
];

export default function WorkPage() {
  // State to track the selected category (if any)
  const categories = ["visas", "mājas zīmes", "mēbeles", "dekorācijas"];
  const [selectedCategory, setSelectedCategory] = useState("visas");
  
  // Filter work items based on selected category
  const filteredItems = selectedCategory === "visas" 
    ? workItems 
    : workItems.filter(item => item.category === selectedCategory);
  
  return (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-12">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold">Mūsu Darbi</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Šeit varat apskatīt daļu no mūsu izstrādātajiem koka darbiem. Katrs projekts ir unikāls un veidots ar rūpību un mīlestību pret koku.
        </p>
      </div>
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <Button 
            key={category} 
            variant={selectedCategory === category ? "default" : "outline"}
            className={`capitalize ${selectedCategory === category ? "bg-amber-600 hover:bg-amber-700" : "border-amber-600/70 text-amber-600 hover:bg-amber-600 hover:text-white"}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden rounded-lg transition-all duration-300 hover:shadow-amber-200 hover:border-amber-500">
            <div className="relative w-full">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={500}
                height={350}
                className="w-full h-64 object-cover object-center"
              />
              <div className="absolute bottom-2 right-2 bg-white/85 border border-amber-600/30 text-amber-700 px-3 py-1 rounded-full text-xs font-medium shadow-sm backdrop-blur-sm">
                {item.category}
              </div>
            </div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p className="text-sm text-muted-foreground">Izgatavošanas laiks: 1-2 nedēļas</p>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center space-y-6">
        <h2 className="text-2xl font-bold">
          Jums ir ideja savam projektam?
        </h2>
        <p className="text-lg mb-6">
          Sazinieties ar mums, lai apspriestu jūsu unikālo ideju! Mēs varam izveidot jebkuru koka izstrādājumu pēc jūsu vēlmēm.
        </p>
        <Button 
          className="bg-amber-600 hover:bg-amber-700 transition-colors duration-300 px-8 py-6 text-lg" 
          asChild
        >
          <Link href="/kontakti">Sazināties par individuālu pasūtījumu</Link>
        </Button>
      </div>
    </div>
  );
}
