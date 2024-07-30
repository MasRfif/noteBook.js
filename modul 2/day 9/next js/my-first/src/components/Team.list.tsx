import Link from "next/link";

interface TeamMember {
  uuid: string; // Added 'uuid' property
  displayName: string;
  ability1: string;
  ability2: string;
  ultimate: string;
  developerName: string;
  displayIcon: string;
}

interface Agent {
  uuid: string; // Added 'uuid' property
  displayName: string;
  abilities: Ability[];
  developerName: string;
  displayIcon: string;
}

interface Ability {
  slot: string;
  displayName: string;
}

export default async function TeamList() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch("https://valorant-api.com/v1/agents");
    const agents: { data: Agent[] } = await response.json();

    const teamMembers: TeamMember[] = agents.data.map((agent: Agent) => ({
      uuid: agent.uuid, // Updated 'uuid' property
      displayName: agent.displayName,
      ability1:
        agent.abilities.find((ability: Ability) => ability.slot === "Ability1")
          ?.displayName ?? "",
      ability2:
        agent.abilities.find((ability: Ability) => ability.slot === "Ability2")
          ?.displayName ?? "",
      ultimate:
        agent.abilities.find((ability: Ability) => ability.slot === "Ultimate")
          ?.displayName ?? "",
      developerName: agent.developerName,
      displayIcon: agent.displayIcon,
    }));

    return (
      <table className="text-sm w-full">
        <thead>
          <tr className="grid grid-cols-6">
            <th className="text-start">Display Name</th>
            <th className="text-start">Ability 1</th>
            <th className="text-start">Ability 2</th>
            <th className="text-start">Ultimate</th>
            <th className="text-start">Developer Name</th>
            <th className="text-start">Display Icon</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {teamMembers.map((teamMember) => (
            <tr key={teamMember.uuid} className="grid grid-cols-6 py-2">
              <td>{teamMember.displayName}</td>
              <td>{teamMember.ability1}</td>
              <td>{teamMember.ability2}</td>
              <td>{teamMember.ultimate}</td>
              <td>{teamMember.developerName}</td>
              <td>
                <Link
                  href={`/dashbord/Second-list/${teamMember.uuid}`} // Updated 'item.uuid' to 'teamMember.uuid'
                  className="bg-slate-300 py-2 px-4 mr-2 rounded-lg block w-fit"
                >
                  <img
                    src={teamMember.displayIcon}
                    alt={teamMember.displayName}
                    style={{ width: "50px" }}
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } catch (error) {
    console.error(error);
  }
}
