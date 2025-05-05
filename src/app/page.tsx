import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function Home() {
  return (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-8 space-y-12">
      {/* Hero Section */}
      <section className="py-8 md:py-16 lg:py-20 flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="flex-1 space-y-5 md:space-y-6 order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center md:text-left">
            Roku darinātas koka <span className="text-amber-600">mākslas darbi</span>
          </h1>
          <TextAnimate by="word" animation="blurInUp" className="text-lg text-muted-foreground">
            Unikāli un augstas kvalitātes koka izstrādājumi - mājas zīmes, mēbeles un dekorācijas, kas
            ienes siltumu un dabas pieskārienu jūsu mājā. Roku darināts Latvijā ar mīlestību un rūpību.
          </TextAnimate>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button 
              asChild 
              className="bg-amber-600 hover:bg-amber-700 transition-colors"
            >
              <Link href="/kontakti">Pasūtīt tagad</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="border-amber-600/70 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors"
            >
              <Link href="/darbi">Apskatīt darbus</Link>
            </Button>
          </div>
        </div>
        
        {/* Image - Display first on mobile, second on desktop */}
        <div className="w-full md:flex-1 h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-xl relative mb-6 md:mb-0 order-1 md:order-2">
          <Image 
            src="/main/481111507_1192535472402245_7721528970129038988_n.jpg" 
            alt="Koka izstrādājumi" 
            fill 
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Kāpēc izvēlēties mūsu koka izstrādājumus?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-amber-200 hover:border-amber-500">
            <CardHeader>
              <CardTitle>Roku darināts</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Katrs izstrādājums ir rūpīgi darināts ar rokām no izejmateriāla līdz apdares darbiem, pievēršot uzmanību katrai detaļai.</p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-amber-200 hover:border-amber-500">
            <CardHeader>
              <CardTitle>Augstas kvalitātes materiāli</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Izmantojam tikai ilgtspējīgus, augstas kvalitātes kokmateriālus, kas izturēs laika pārbaudi un ienesīs dabas skaistumu jūsu mājā.</p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-amber-200 hover:border-amber-500">
            <CardHeader>
              <CardTitle>Individuāla pieeja</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Katrs projekts ir unikāls un veidots atbilstoši jūsu vēlmēm - no mājas zīmēm līdz krēsliem un galdiem.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Mūsu koka izstrādājumu klāsts
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg">
            <div className="w-full">
              <Image
                src="/works/482301682_1198037755185350_1762068951578885760_n.jpg"
                alt="Mājas zīme"
                width={500}
                height={350}
                className="w-full h-64 object-cover object-center"
              />
            </div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Mājas zīmes</h3>
              <p className="text-muted-foreground">Personalizētas koka mājas zīmes ar jūsu mājas nosaukumu, numuru vai unikālu dizainu.</p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg">
            <div className="w-full">
              <Image
                src="/works/481153374_1192535599068899_6161729925117165000_n.jpg"
                alt="Mēbeles"
                width={500}
                height={350}
                className="w-full h-64 object-cover object-center"
              />
            </div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Koka mēbeles</h3>
              <p className="text-muted-foreground">Roku darināti galdi, krēsli, plaukti un citas mēbeles, kas kļūs par jūsu interjera akcentu.</p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg">
            <div className="w-full">
              <Image
                src="/works/482271542_1198038021851990_8879561520875790612_n.jpg"
                alt="Dekorācijas"
                width={500}
                height={350}
                className="w-full h-64 object-cover object-center"
              />
            </div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Interjera dekorācijas</h3>
              <p className="text-muted-foreground">Dekoratīvi elementi, pulksteņi, svečturi un citi aksesuāri, kas papildinās jūsu mājas interjeru.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900 rounded-lg p-8 mt-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Kā notiek process?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl font-bold">1</div>
            <h3 className="text-xl font-semibold">Dizains</h3>
            <p>Izstrādājam dizainu pēc jūsu vēlmēm vai piedāvājam savas idejas, kas piemērotas tieši jums.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl font-bold">2</div>
            <h3 className="text-xl font-semibold">Izgatavošana</h3>
            <p>Rūpīga koka atlase, apstrāde un izgatavošana, izmantojot tradicionālas galdniecības metodes un modernās tehnoloģijas.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl font-bold">3</div>
            <h3 className="text-xl font-semibold">Piegāde</h3>
            <p>Gatavā izstrādājuma piegāde vai saņemšana personīgi pēc jūsu izvēles un ērtībām.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 text-center space-y-6">
        <h2 className="text-3xl font-bold">
          Gatavs pasūtīt savu unikālo koka izstrādājumu?
        </h2>
        <TextAnimate by="word" animation="blurInUp" className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Sazinieties ar mums, lai apspriestu jūsu idejas un uzsāktu darbu pie jūsu sapņu mājas zīmes, koka mēbelēm vai citiem koka izstrādājumiem.
        </TextAnimate>
        <Button size="lg" className="bg-amber-600 hover:bg-amber-700 transition-colors duration-300 px-10 py-8 text-lg" asChild>
          <Link href="/kontakti">Sazināties tagad</Link>
        </Button>
      </section>
    </div>
  );
}
