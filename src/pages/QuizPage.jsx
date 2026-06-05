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

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setErrors((prev) => prev.filter((id) => id !== questionId));
  };

  const handleRetake = () => {
    setAnswers({});
    setSubmitted(false);
    setErrors([]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allIds = OSDI_SECTIONS.flatMap((s) => s.questions.map((q) => q.id));
    const unanswered = allIds.filter((id) => answers[id] === undefined);
    if (unanswered.length > 0) {
      setErrors(unanswered);
      const el = document.getElementById(`question-${unanswered[0]}`);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const result = submitted ? calculateOSDIScore(answers) : null;

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {!submitted ? (
          <>
            <div className="text-center mb-10">
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

            <form onSubmit={handleSubmit} className="space-y-10">
              {OSDI_SECTIONS.map((section, sIdx) => (
                <div key={section.title}>
                  <div className="mb-6">
                    <span className="eyebrow">
                      Section {sIdx + 1} of 3
                    </span>
                    <h2 className="font-display text-xl font-semibold text-green-dark mt-1">{section.title}</h2>
                    <p className="text-sm text-green-dark/60 mt-1">{section.subtitle}</p>
                  </div>

                  <div className="space-y-6">
                    {section.questions.map((q) => (
                      <div
                        key={q.id}
                        id={`question-${q.id}`}
                        className={`soft-surface rounded-[1.6rem] p-5 md:p-6 transition-all ${
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
                                  : 'bg-green-bg/55 text-green-dark/70 hover:bg-green-light/60'
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="primary-button inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold"
                >
                  Calculate My Score
                  <ArrowRight size={18} />
                </button>
                {errors.length > 0 && (
                  <p className="text-[#9d5e58] text-sm mt-3">Please answer all 12 questions before submitting.</p>
                )}
              </div>
            </form>
          </>
        ) : (
          result && <ResultView result={result} onRetake={handleRetake} />
        )}
      </div>
    </div>
  );
}
