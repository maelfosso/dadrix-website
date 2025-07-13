'use client';

import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { useId } from "react";


function TextArea({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'textarea'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <textarea
        id={id}
        {...props}
        rows={10}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      ></textarea>
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/6 left-6 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  );
}


function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-hidden checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

export default function RegisterForm() {
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name")?.toString().trim() || "",
      email: formData.get("email")?.toString().trim() || "",
      phone: formData.get("phone")?.toString().trim() || "",
      address: formData.get("address")?.toString().trim() || "",
      company: formData.get("company")?.toString().trim() || "",
      activities: formData.get("activities")?.toString().trim() || "",
      interests: formData.get("interests")?.toString().trim() || "",
      sector: formData.get("sector")?.toString().trim() || "",
      excelLevel: formData.get("excelLevel")?.toString().trim() || "",
      papier: formData.get("papier")?.toString().trim() || "",
      other: formData.get("other")?.toString().trim() || "",
    };

    const errors = [];
    if (!data.name) errors.push("Le nom est obligatoire.");
    if (!data.email) {
      errors.push("L'email est obligatoire.");
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      errors.push("L'email n'est pas valide.");
    }
    if (!data.phone) errors.push("Le téléphone est obligatoire.");

    if (errors.length > 0) {
      alert("Erreur :\n" + errors.join("\n"));
      return;
    }

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Erreur serveur.");

      alert("✅ Merci ! Votre inscription a bien été envoyée.");
      form.reset();
    } catch (error) {
      console.error(error);
      alert("❌ Une erreur est survenue. Merci de réessayer.");
    }
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950 mb-6">
          Inscrivez-vous à la formation
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* 🟩 Colonne GAUCHE : Obligatoire */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide">
              Informations obligatoires
            </h3>
            <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
              <TextInput label="Nom et Prénoms" name="name" required autoComplete="name" />
              <TextInput label="Email" type="email" name="email" required autoComplete="email" />
              <TextInput label="Téléphone (WhatsApp)" type="tel" name="phone" required autoComplete="tel" />
              <TextInput label="Adresse (Ville, Pays)" name="address" autoComplete="address" />
              <TextInput label="Entreprise" name="company" autoComplete="organization" />
              <TextArea
                label="Parlez-nous de vos activités, celles que vous pilotez"
                name="activities"
                autoComplete="activities"
              />
              <TextArea
                label="Comment pensez-vous que cette formation pourra vous aider ?"
                name="interests"
                autoComplete="interests"
              />
            </div>
          </div>

          {/* 🟦 Colonne DROITE : Facultatif */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide">
              Informations facultatives
            </h3>
            <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
              <TextInput
                label="Secteur d'activité"
                name="sector"
                placeholder="Ex : Santé, Éducation, BTP, etc."
              />
              <TextInput
                label="Avez-vous déjà utilisé Excel ?"
                name="excelLevel"
                placeholder="Oui / Non / Un peu"
              />
              <TextInput
                label="Souhaitez-vous recevoir le support en version papier ?"
                name="papier"
                placeholder="Oui / Non"
              />
              <TextArea
                label="Autres commentaires ou besoins particuliers"
                name="other"
              />
            </div>
          </div>
        </div>

        <Button type="submit" className="mt-10">
          👉 Je m'inscris
        </Button>
      </form>
    </FadeIn>
  )
}
