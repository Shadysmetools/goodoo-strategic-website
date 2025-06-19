import React from 'react'
import personasData from '../../data/user-personas.json'

type Persona = {
  id: string;
  name: string;
  title: string;
  role?: string;
  demographics: Record<string, string>;
  quote?: string;
  motivations?: string[];
  goals?: string[];
  painPoints?: { title: string; description: string }[] | string[];
  wateringHoles?: string[];
  howGoodooHelps?: { from: string; to: string; description: string }[];
};

type Personas = {
  title: string;
  subtitle: string;
  primaryPersona: Persona;
  secondaryPersonas: Persona[];
};

const personas = personasData as Personas;

export default function UserPersonasPage() {
  const p = personas.primaryPersona;
  return (
    <div className="container mx-auto px-4 py-8 space-y-10">
      <h1 className="section-title">{personas.title}</h1>
      <p className="text-secondary-700 mb-4 text-lg">{personas.subtitle}</p>
      <div className="card mb-6">
        <h2 className="text-lg font-bold text-primary-700 mb-2">Primary Persona: {p.name} ({p.title})</h2>
        <div className="mb-2"><span className="font-semibold text-primary-600">Role:</span> {p.role}</div>
        <div className="mb-2"><span className="font-semibold text-primary-600">Demographics:</span>
          <ul className="list-disc ml-6 mt-1">
            {Object.entries(p.demographics).map(([k, v], idx) => (
              <li key={idx}><span className="font-medium text-secondary-900">{k.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</span> {v}</li>
            ))}
          </ul>
        </div>
        {p.quote && <blockquote className="italic text-secondary-600 border-l-4 border-primary-300 pl-4 mb-2">"{p.quote}"</blockquote>}
        <div className="mb-2"><span className="font-semibold text-primary-600">Motivations:</span>
          <ul className="list-disc ml-6 mt-1">
            {p.motivations?.map((m, idx) => <li key={idx}>{m}</li>)}
          </ul>
        </div>
        <div className="mb-2"><span className="font-semibold text-primary-600">Goals:</span>
          <ul className="list-disc ml-6 mt-1">
            {p.goals?.map((g, idx) => <li key={idx}>{g}</li>)}
          </ul>
        </div>
        <div className="mb-2"><span className="font-semibold text-primary-600">Pain Points:</span>
          <ul className="list-disc ml-6 mt-1">
            {p.painPoints?.map((pp, idx) => {
              if (typeof pp === 'string') {
                return <li key={idx}>{pp}</li>;
              } else {
                return <li key={idx}><span className="font-medium text-secondary-900">{pp.title}:</span> {pp.description}</li>;
              }
            })}
          </ul>
        </div>
        <div className="mb-2"><span className="font-semibold text-primary-600">Watering Holes & Channels:</span>
          <ul className="list-disc ml-6 mt-1">
            {p.wateringHoles?.map((w, idx) => <li key={idx}>{w}</li>)}
          </ul>
        </div>
        <div><span className="font-semibold text-primary-600">How Goodoo.ai Helps:</span>
          <ul className="list-disc ml-6 mt-1">
            {p.howGoodooHelps?.map((h, idx) => <li key={idx}><span className="font-medium text-secondary-900">{h.from} → {h.to}:</span> {h.description}</li>)}
          </ul>
        </div>
      </div>
      <div className="card">
        <h2 className="text-lg font-bold text-primary-700 mb-2">Secondary Personas</h2>
        {personas.secondaryPersonas.map((sp, idx) => (
          <div key={sp.id} className="mb-6">
            <h3 className="text-md font-semibold text-secondary-900 mb-1">{sp.name} ({sp.title})</h3>
            <div className="mb-1"><span className="font-semibold text-primary-600">Demographics:</span>
              <ul className="list-disc ml-6 mt-1">
                {Object.entries(sp.demographics).map(([k, v], i) => (
                  <li key={i}><span className="font-medium text-secondary-900">{k.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</span> {v}</li>
                ))}
              </ul>
            </div>
            <div className="mb-1"><span className="font-semibold text-primary-600">Pain Points:</span>
              <ul className="list-disc ml-6 mt-1">
                {sp.painPoints?.map((pp, i) => {
                  if (typeof pp === 'string') {
                    return <li key={i}>{pp}</li>;
                  } else {
                    return <li key={i}><span className="font-medium text-secondary-900">{pp.title}:</span> {pp.description}</li>;
                  }
                })}
              </ul>
            </div>
            <div><span className="font-semibold text-primary-600">Goals:</span>
              <ul className="list-disc ml-6 mt-1">
                {sp.goals?.map((g, i) => <li key={i}>{g}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 