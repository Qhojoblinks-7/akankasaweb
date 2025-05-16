const faqs = [
    {
      question: "Is prior knowledge of Akan required to start learning?",
      answer: "No, our platform is designed for learners of all levels, including complete beginners. Our beginner level starts with the very basics.",
    },
    {
      question: "What types of learning resources do you offer?",
      answer: "We offer a variety of resources, including interactive lessons, audio pronunciation guides, downloadable worksheets, and cultural activities.",
    },
    {
      question: "Is there a cost to use your learning platform?",
      answer: "We offer both free and premium content. Our free tier provides access to introductory lessons, while our premium subscription unlocks all resources and advanced features.",
    },
    {
      question: "How much time should I dedicate to learning each week?",
      answer: "The amount of time you dedicate is flexible and depends on your goals. Even dedicating 30 minutes a few times a week can lead to noticeable progress.",
    },
    {
      question: "Can I learn at my own pace?",
      answer: "Yes, our platform is self-paced, allowing you to learn whenever and wherever it's convenient for you. You can revisit lessons and practice as needed.",
    },
    // Add more frequently asked questions here
  ];
  
  export default function FAQ() {
    return (
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-gray-600">Have Questions?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find answers to common questions about learning Akan with our platform.
            </p>
          </div>
          <div className="mt-10 mx-auto max-w-xl">
            <dl className="space-y-8 divide-y divide-gray-200">
              {faqs.map((faq) => (
                <div key={faq.question} className="pt-8">
                  <dt className="text-lg font-semibold text-gray-900">{faq.question}</dt>
                  <dd className="mt-3 text-base text-gray-600">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    );
  }