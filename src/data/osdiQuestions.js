// Official OSDI (Ocular Surface Disease Index) — 12 items
// Source: Schiffman RM et al. Arch Ophthalmol. 2000;118:615-621
// Scale: 0 = None of the time … 4 = All of the time (past week)

export const SCALE_OPTIONS = [
  { value: 0, label: 'Never' },
  { value: 1, label: 'Sometimes' },
  { value: 2, label: 'Half the time' },
  { value: 3, label: 'Most of the time' },
  { value: 4, label: 'All the time' },
];

export const OSDI_SECTIONS = [
  {
    title: 'Symptoms of ocular irritation',
    subtitle: 'Have you experienced any of the following during the last week?',
    questions: [
      { id: 1, text: 'Eyes that are sensitive to light?' },
      { id: 2, text: 'Eyes that feel gritty?' },
      { id: 3, text: 'Painful or sore eyes?' },
      { id: 4, text: 'Blurred vision?' },
      { id: 5, text: 'Poor vision?' },
    ],
  },
  {
    title: 'Vision-related function',
    subtitle: 'Have problems with your eyes limited you in performing any of the following during the last week?',
    questions: [
      { id: 6, text: 'Reading?' },
      { id: 7, text: 'Driving at night?' },
      { id: 8, text: 'Working with a computer or bank machine (ATM)?' },
      { id: 9, text: 'Watching TV?' },
    ],
  },
  {
    title: 'Environmental triggers',
    subtitle: 'Have your eyes felt uncomfortable in any of the following situations during the last week?',
    questions: [
      { id: 10, text: 'Windy conditions?' },
      { id: 11, text: 'Places or areas with low humidity (very dry)?' },
      { id: 12, text: 'Areas that are air conditioned?' },
    ],
  },
];

export const ALL_OSDI_QUESTIONS = OSDI_SECTIONS.flatMap((s) => s.questions);

export function calculateOSDIScore(answers) {
  const answered = Object.entries(answers).filter(([, v]) => v !== null && v !== undefined);
  if (answered.length === 0) return null;

  const sum = answered.reduce((acc, [, v]) => acc + v, 0);
  const score = (sum * 25) / answered.length;

  let severity, label, color;
  if (score <= 12) {
    severity = 'normal';
    label = 'Normal';
    color = 'green';
  } else if (score <= 22) {
    severity = 'mild';
    label = 'Mild Dry Eye';
    color = 'yellow';
  } else if (score <= 32) {
    severity = 'moderate';
    label = 'Moderate Dry Eye';
    color = 'orange';
  } else {
    severity = 'severe';
    label = 'Severe Dry Eye';
    color = 'red';
  }

  return { score: Math.round(score * 10) / 10, severity, label, color, answeredCount: answered.length };
}

export function getRecommendations(severity) {
  const base = {
    normal: {
      message: 'Your responses suggest your ocular surface is functioning within a normal range. If you still experience occasional discomfort, simple lifestyle adjustments may help.',
      lifestyle: [
        'Take regular screen breaks using the 20-20-20 rule (every 20 minutes, look 20 feet away for 20 seconds)',
        'Stay well hydrated — dehydration can affect tear quality',
        'Use a humidifier in dry indoor environments',
      ],
      products: ['Preservative-free artificial tears for occasional use', 'Omega-3 rich foods (salmon, walnuts, flaxseed)'],
    },
    mild: {
      message: 'Your score suggests mild dry eye disease. Many people at this stage find relief through consistent lubrication and small daily habit changes.',
      lifestyle: [
        'Use preservative-free artificial tears 2–4 times daily',
        'Reduce direct airflow from AC or fans toward your face',
        'Increase blink rate during screen work',
        'Consider an anti-inflammatory diet rich in omega-3 fatty acids',
      ],
      products: ['Systane Ultra or Refresh Optive artificial tears', 'Warm compress mask (5–10 min daily)', 'PRN Omega-3 or HydroEye supplements'],
    },
    moderate: {
      message: 'Your score indicates moderate dry eye disease. This level often benefits from a structured treatment plan — we strongly recommend scheduling an eye care professional evaluation.',
      lifestyle: [
        'Apply warm compresses daily to support meibomian gland function',
        'Use a humidifier and limit screen time before bed',
        'Avoid environments with low humidity when possible',
        'Discuss prescription options with your ophthalmologist',
      ],
      products: ['Bruder Moist Heat Eye Compress', 'Preservative-free tear gel for overnight relief', 'HydroEye or PRN DE Omega-3 supplements', 'Blue light filtering glasses for extended screen use'],
    },
    severe: {
      message: 'Your score suggests severe dry eye disease. Please consult an eye care professional promptly — chronic severe dry eye can affect vision and quality of life, but effective treatments are available.',
      lifestyle: [
        'Seek comprehensive evaluation from a cornea or dry eye specialist',
        'Avoid contact lenses until evaluated by your doctor',
        'Use humidifiers and limit exposure to windy, air-conditioned environments',
        'Follow your doctor\'s prescribed treatment plan consistently',
      ],
      products: ['Prescription drops (Restasis, Xiidra — doctor consultation required)', 'Bruder Moist Heat Eye Compress', 'Preservative-free artificial tears (frequent use)', 'Humidifier for bedroom and workspace'],
    },
  };
  return base[severity];
}
