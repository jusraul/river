import SectionHeading from '@/components/SectionHeading'
import PrimaryButton from '@/components/PrimaryButton'

export const metadata = {
  title: 'Get Involved | Lower Withlacoochee River Keeper',
  description:
    'Volunteer, donate, or join a cleanup. We offer inclusive opportunities for all, including veterans and people with disabilities.',
}

export default function GetInvolvedPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <SectionHeading>Get Involved</SectionHeading>

      <p className="text-slate-700 mb-6">
        We welcome volunteers, donors, and partners of all backgrounds. Whether you want to join a cleanup, support habitat
        restoration, or help with education and outreach, your involvement makes a difference. We offer inclusive opportunities for
        veterans and people with disabilities, and can accommodate groups and corporate volunteer days.
      </p>

      <div className="mb-8">
        <PrimaryButton asChild>
          <a href="#volunteer">Volunteer Sign-Up</a>
        </PrimaryButton>
        <PrimaryButton asChild variant="secondary" className="ml-3">
          <a href="#donate">Donate Now</a>
        </PrimaryButton>
      </div>

      <section id="volunteer" className="mb-10">
        <h3 className="font-bold text-emerald-700 mb-2">Join a Cleanup</h3>
        <p className="text-slate-700 mb-2">
          Fill out the form below to express interest in volunteering. We’ll contact you with upcoming opportunities.
        </p>

        <form className="space-y-3" action="https://formspree.io/f/xwkdygqg" method="POST">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 block w-full rounded border-stone-300 focus:ring-emerald-600 focus:border-emerald-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full rounded border-stone-300 focus:ring-emerald-600 focus:border-emerald-600"
            />
          </div>

          <div>
            <label htmlFor="interest" className="block text-sm font-medium text-slate-700">
              How would you like to help?
            </label>
            <textarea
              id="interest"
              name="interest"
              rows={3}
              className="mt-1 block w-full rounded border-stone-300 focus:ring-emerald-600 focus:border-emerald-600"
            />
          </div>

          <PrimaryButton type="submit">Submit</PrimaryButton>
        </form>
      </section>

      <section id="donate" className="mb-10">
        <h3 className="font-bold text-emerald-700 mb-2">Donate</h3>
        <p className="text-slate-700 mb-2">
          Your donation directly supports hands-on stewardship, restoration, and education.
        </p>
        <div className="flex justify-center my-4">
          <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="hosted_button_id" value="4WRYAH564AV4J" />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
            />
            <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </div>
      </section>
    </main>
  )
}
<section id="donate" className="mb-10">
  <h3 className="font-bold text-emerald-700 mb-2">Donate</h3>
  <p className="text-slate-700 mb-2">
    Your donation directly supports hands-on stewardship, restoration, and education.
  </p>
  <div className="flex justify-center my-4">
    <form action="https://www.paypal.com/donate" method="post" target="_top">
      <input type="hidden" name="hosted_button_id" value="4WRYAH564AV4J" />
      <input
        type="image"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
        name="submit"
        title="PayPal - The safer, easier way to pay online!"
        alt="Donate with PayPal button"
      />
      <img
        alt=""
        src="https://www.paypal.com/en_US/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
  </div>
</section>
// ...existing code...