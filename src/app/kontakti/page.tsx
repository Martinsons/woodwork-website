'use client';

import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { TextAnimate } from '@/components/magicui/text-animate';

export default function ContactPage() {
  const [files, setFiles] = useState<File[]>([]);
  
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.svg'],
    },
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
      toast.success(`Faili veiksmīgi augšupielādēti: ${acceptedFiles.map(file => file.name).join(', ')}`);
    },
  });

  function onSubmit(data: any) {
    toast.success('Paldies! Jūsu ziņojums ir nosūtīts. Sazināsimies ar jums drīzumā!');
    console.log(data);
    console.log('Files:', files);
    form.reset();
    setFiles([]);
  }

  return (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-12">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold">Kontakti</h1>
        <TextAnimate by="word" animation="blurInUp" className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Sazinieties ar mums, lai apspriestu jūsu idejas vai jautājumus par mūsu koka izstrādājumiem - mājas zīmēm, mēbelēm vai interjera dekorācijām.
        </TextAnimate>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-amber-200 hover:border-amber-500">
          <CardHeader>
            <CardTitle>Sazinieties ar mums</CardTitle>
            <CardDescription>
              Aizpildiet formu, un mēs sazināsimies ar jums pēc iespējas ātrāk.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vārds un uzvārds</FormLabel>
                      <FormControl>
                        <Input placeholder="Jānis Bērziņš" {...field} required />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-pasta adrese</FormLabel>
                      <FormControl>
                        <Input placeholder="janis@example.com" {...field} type="email" required />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tālrunis</FormLabel>
                      <FormControl>
                        <Input placeholder="+371 2x xxx xxx" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ziņojums</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Aprakstiet savu ideju vai jautājumu..." rows={4} {...field} required />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div>
                  <p className="text-sm font-medium mb-2">Pievienojiet dizaina failus vai iedvesmas attēlus (neobligāti)</p>
                  <div
                    {...getRootProps()}
                    className="border-2 border-dashed border-amber-600/30 rounded-md p-8 text-center hover:border-amber-600 cursor-pointer transition-colors duration-300"
                  >
                    <input {...getInputProps()} />
                    <p className="text-sm text-muted-foreground">
                      Velciet un nometiet failus šeit vai klikšķiniet, lai augšupielādētu
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Pieņem JPG, PNG, vai SVG failus - jūsu iedvesmas attēlus, skices vai idejas
                    </p>
                  </div>
                  {files.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-medium mb-2">Augšupielādētie faili:</p>
                      <ul className="text-sm text-muted-foreground">
                        {files.map((file) => (
                          <li key={file.name}>{file.name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 transition-colors duration-300">Nosūtīt ziņojumu</Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-amber-200 hover:border-amber-500">
          <CardHeader>
            <CardTitle>Kontaktinformācija</CardTitle>
            <CardDescription>
              Šeit ir mūsu kontaktinformācija, ja vēlaties sazināties tiešā veidā.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Adrese</h3>
              <p className="text-muted-foreground">Koka iela 15, Rīga, LV-1010, Latvija</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">E-pasts</h3>
              <p className="text-muted-foreground">info@kokaskaistums.lv</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Tālrunis</h3>
              <p className="text-muted-foreground">+371 26 123 456</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Darba laiks</h3>
              <p className="text-muted-foreground">Pirmdiena - Piektdiena: 9:00 - 17:00</p>
              <p className="text-muted-foreground">Sestdiena - Svētdiena: Pēc vienošanās</p>
            </div>
            <div className="mt-6 pt-6 border-t">
              <h3 className="text-lg font-semibold mb-2">Izgatavoto produktu klāsts</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Mājas zīmes un nosaukuma plāksnes</li>
                <li>Koka mēbeles (galdi, krēsli, plaukti, gultas)</li>
                <li>Interjera dekorācijas un aksesuāri</li>
                <li>Dārza mēbeles un āra konstrukcijas</li>
                <li>Personalizētas koka dāvanas un suvenīri</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
