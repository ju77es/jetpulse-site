export default function Contact() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="mt-4 text-lg">Une question ? Contactez-nous !</p>
      <form className="mt-6">
        <input type="text" placeholder="Nom" className="block mx-auto mb-4 p-2 rounded bg-gray-700 text-white" />
        <input type="email" placeholder="Email" className="block mx-auto mb-4 p-2 rounded bg-gray-700 text-white" />
        <textarea placeholder="Votre message" className="block mx-auto mb-4 p-2 rounded bg-gray-700 text-white"></textarea>
        <button type="submit" className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600">Envoyer</button>
      </form>
    </div>
  );
}
