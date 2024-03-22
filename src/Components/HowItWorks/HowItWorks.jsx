const HowItWorks = () => {
  return (
    <div>
      <section className="mt-10 px-4 space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-20">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            How It Works
          </h2>

          <p className="max-w-[70%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Create a cover page for your assignment, craft the content of your
            assignment, export your work as a PDF document. As simple as that.
          </p>
        </div>

        <div className="!mt-14 mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border-2 border-gray-500 bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <img src="/add-button.png" className="w-[50px]" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Create Cover Page</h3>
                <p className="text-sm font-semibold text-gray-600">
                  Create your assignment cover page by providing necessary
                  informations.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border-2 border-gray-500 bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <img src="/contract.png" className="w-[50px]" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Write Assignment</h3>
                <p className="text-sm font-semibold text-gray-600">
                  Write your assignment contents in the text editor like you do
                  in MS Word.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border-2 border-gray-500 bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <img src="/pdf.png" className="w-[50px]" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Export as PDF</h3>
                <p className="text-sm font-semibold text-gray-600">
                  Upon completing assignment, export file as pdf and print it or
                  submit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
