import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, RotateCcw, Leaf, FlaskConical } from 'lucide-react';
import {
  OSDI_SECTIONS,
  SCALE_OPTIONS,
  calculateOSDIScore,
  getRecommendations,
} from '../data/osdiQuestions';

const SEVERITY_STYLES = {
  normal: 'bg-green-light/70 text-green-dark border-green-mid/45',
  mild: 'bg-[#f4eddc] text-[#7a6442] border-[#ccb58c]',
  moderate: 'bg-[#f1e1d2] text-[#895d3e] border-[#c79a73]',
  severe: 'bg-[#ecd7d2] text-[#87524a] border-[#cc9187]',
};

function ResultView({ result, onRetake }) {
  const rec = getRecommendations(result.severity);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <CheckCircle size={48} className="text-green-mid mx-auto mb-4" />
        <h2 className="font-display text-3xl font-bold text-green-dark mb-2">Your OSDI Results</h2>
        <p className="text-green-dark/60 text-sm">Based on {result.answeredCount} of 12 questions answered</p>
      </div>

      <div className="soft-surface rounded-[2rem] p-8 mb-6 text-center">
        <p className="text-sm text-green-dark/60 mb-2 uppercase tracking-wider font-semibold">Your OSDI Score</p>
        <p className="font-display text-6xl font-bold text-green-dark mb-4">{result.score}</p>
        <span className={`inline-block px-5 py-2 rounded-full text-sm font-semibold border-2 ${SEVERITY_STYLES[result.severity]}`}>
          {result.label}
        </span>
        <p className="mt-6 text-green-dark/75 leading-relaxed text-left">{rec.message}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="soft-surface rounded-[1.6rem] p-6">
          <h3 className="font-display font-semibold text-green-dark mb-4 flex items-center gap-2">
            <Leaf size={20} /> Lifestyle Suggestions
          </h3>
          <ul className="space-y-2">
            {rec.lifestyle.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-green-dark/75">
                <span className="text-green-mid mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="soft-surface rounded-[1.6rem] p-6">
          <h3 className="font-display font-semibold text-green-dark mb-4 flex items-center gap-2">
            <FlaskConical size={20} /> Product Categories to Explore
          </h3>
          <ul className="space-y-2">
            {rec.products.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-green-dark/75">
                <span className="text-green-mid mt-0.5">→</span>
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="/products"
            className="inline-flex items-center gap-1 text-green-mid text-sm font-medium mt-4 hover:text-green-dark transition-colors"
          >
            Browse product guide <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <div className="rounded-[1.5rem] border border-[#d3c29b] bg-[#f7f0de] p-5 flex gap-3 mb-8">
        <AlertTriangle size={20} className="text-[#9c7b43] shrink-0 mt-0.5" />
        <p className="text-sm text-[#6b5430] leading-relaxed">
          <strong>Important:</strong> This is not a medical diagnosis. The OSDI is a screening tool
          used by eye care professionals — please consult an ophthalmologist or optometrist for
          a comprehensive evaluation and personalized treatment plan.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={onRetake}
          className="secondary-button inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium"
        >
          <RotateCcw size={16} />
          Retake Quiz
        </button>
        <Link
          to="/products"
          className="primary-button px-6 py-3 rounded-full font-medium"
        >
          View Product Guide
        </Link>
      </div>
    </div>
  );
}

export default function QuizPage() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);
  const [currentSection, setCurrentSection] = useState(0);

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setErrors((prev) => prev.filter((id) => id !== questionId));
  };

  const handleRetake = () => {
    setAnswers({});
    setSubmitted(false);
    setErrors([]);
    setCurrentSection(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const validateSection = (sectionIndex) => {
    const unanswered = OSDI_SECTIONS[sectionIndex].questions
      .map((q) => q.id)
      .filter((id) => answers[id] === undefined);

    if (unanswered.length > 0) {
      setErrors(unanswered);
      const el = document.getElementById(`question-${unanswered[0]}`);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return false;
    }

    setErrors([]);
    return true;
  };

  const handleNextSection = () => {
    if (!validateSection(currentSection)) return;
    setCurrentSection((prev) => Math.min(prev + 1, OSDI_SECTIONS.length - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePreviousSection = () => {
    setErrors([]);
    setCurrentSection((prev) => Math.max(prev - 1, 0));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allIds = OSDI_SECTIONS.flatMap((s) => s.questions.map((q) => q.id));
    const unanswered = allIds.filter((id) => answers[id] === undefined);
    if (unanswered.length > 0) {
      setErrors(unanswered);
      const nextSection = OSDI_SECTIONS.findIndex((section) =>
        section.questions.some((question) => question.id === unanswered[0]),
      );
      setCurrentSection(nextSection === -1 ? 0 : nextSection);
      setTimeout(() => {
        const el = document.getElementById(`question-${unanswered[0]}`);
        el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 0);
      return;
    }
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const result = submitted ? calculateOSDIScore(answers) : null;
  const section = OSDI_SECTIONS[currentSection];
  const totalSections = OSDI_SECTIONS.length;
  const answeredCount = Object.keys(answers).length;
  const progressPercent = Math.round(((currentSection + 1) / totalSections) * 100);

  return (
    <div>
      {!submitted ? (
        <>
          <section className="section-band-light py-10 md:py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <Link to="/" className="inline-flex items-center gap-1 text-green-mid text-sm mb-6 hover:text-green-dark transition-colors">
                <ArrowLeft size={16} /> Back to Home
              </Link>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-4">
                OSDI Dry Eye Assessment
              </h1>
              <p className="text-green-dark/70 leading-relaxed max-w-xl mx-auto">
                The Ocular Surface Disease Index (OSDI) is a clinically validated 12-question
                questionnaire developed by Schiffman et al. (2000). Answer based on your
                experiences <strong>during the past week</strong>.
              </p>
            </div>
          </section>

          <section className="section-band-dark py-16 md:py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="soft-surface rounded-[2rem] p-6 md:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-5">
                    <div>
                      <span className="eyebrow">
                        Section {currentSection + 1} of {totalSections}
                      </span>
                      <h2 className="font-display text-xl md:text-2xl font-semibold text-green-dark mt-2">{section.title}</h2>
                      <p className="text-sm text-green-dark/60 mt-1">{section.subtitle}</p>
                    </div>
                    <div className="text-sm text-green-dark/60">
                      {answeredCount} of 12 answered
                    </div>
                  </div>

                  <div className="h-2 rounded-full bg-green-bg/80 overflow-hidden mb-8">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-green-mid to-green-dark transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>

                  <div className="space-y-6">
                    {section.questions.map((q) => (
                      <div
                        key={q.id}
                        id={`question-${q.id}`}
                        className={`soft-panel rounded-[1.6rem] p-5 md:p-6 transition-all ${
                          errors.includes(q.id) ? 'ring-2 ring-[#c58c84]' : ''
                        }`}
                      >
                        <p className="font-medium text-green-dark mb-4">
                          <span className="text-green-mid mr-2">{q.id}.</span>
                          {q.text}
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                          {SCALE_OPTIONS.map((opt) => (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => handleAnswer(q.id, opt.value)}
                              className={`px-2 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 ${
                                answers[q.id] === opt.value
                                  ? 'bg-green-dark text-white shadow-[0_10px_22px_rgba(54,83,71,0.16)]'
                                  : 'bg-white/70 text-green-dark/70 hover:bg-green-light/60'
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {errors.length > 0 && (
                    <p className="text-[#9d5e58] text-sm mt-5">Please answer every question in this section before continuing.</p>
                  )}

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mt-8">
                    <button
                      type="button"
                      onClick={handlePreviousSection}
                      disabled={currentSection === 0}
                      className="secondary-button inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium disabled:opacity-45 disabled:cursor-not-allowed"
                    >
                      <ArrowLeft size={16} />
                      Previous
                    </button>

                    {currentSection < totalSections - 1 ? (
                      <button
                        type="button"
                        onClick={handleNextSection}
                        className="primary-button inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium"
                      >
                        Next Section
                        <ArrowRight size={16} />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="primary-button inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold"
                      >
                        Calculate My Score
                        <ArrowRight size={18} />
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </section>
        </>
      ) : (
        <section className="section-band-light py-10 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {result && <ResultView result={result} onRetake={handleRetake} />}
          </div>
        </section>
      )}
    </div>
  );
}
