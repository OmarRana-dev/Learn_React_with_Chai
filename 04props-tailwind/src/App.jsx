import "./App.css";
import Card from "./components/card";

function App() {
  const itTeam = [
    {
      name: "Avery",
      description:
        "A skilled software engineer specializing in full-stack development.",
      imageUrl: "https://rb.gy/ukvstw",
    },
    {
      name: "Benjamin",
      description:
        "A data analyst with expertise in extracting insights from large datasets.",
      imageUrl: "https://rb.gy/jwnqjj",
    },
    {
      name: "Chloe",
      description:
        "A UX/UI designer passionate about creating intuitive user interfaces.",
      imageUrl: "https://rb.gy/xvgrx3",
    },
    {
      name: "Daniel",
      description:
        "A cybersecurity expert specializing in network and data protection.",
      imageUrl: "https://rb.gy/nzywou",
    },
    {
      name: "Emily",
      description:
        "A project manager with a proven track record of delivering successful projects.",
      imageUrl: "https://rb.gy/uikl5h",
    },
    {
      name: "Finn",
      description:
        "A DevOps engineer focused on automating and optimizing IT processes.",
      imageUrl: "https://rb.gy/w0vmiv",
    },
    {
      name: "Grace",
      description:
        "A cloud architect specializing in designing and implementing cloud-based solutions.",
      imageUrl: "https://rb.gy/vkxwah",
    },
    {
      name: "Hudson",
      description:
        "A software tester with a keen eye for identifying defects and ensuring quality.",
      imageUrl: "https://rb.gy/5ty2hg",
    },
    {
      name: "Ivy",
      description:
        "A data scientist skilled in building predictive models and machine learning algorithms.",
      imageUrl: "https://rb.gy/3jtyv5",
    },
  ];

  return (
    <>
      <h1 className="mb-4">Our Team</h1>
      <div className="flex flex-wrap items-center gap-2">
        {itTeam.map((person) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Card
              personName={person.name}
              aboutPerson={person.description}
              imgUrl={person.imageUrl}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
