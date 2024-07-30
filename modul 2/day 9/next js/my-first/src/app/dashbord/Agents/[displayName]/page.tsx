// Map the code to spawn all results
interface Params {
  uuid: string;
}

export default async function Page({ params }: { params: Params }) {
  try {
    const response = await fetch(`https://valorant-api.com/v1/${params.uuid}/`);
    const agentData = await response.json();

    const agentDetails = {
      uuid: agentData.data.uuid,
      displayName: agentData.data.displayName,
      description: agentData.data.description,
      developerName: agentData.data.developerName,
    };

    return (
      <div className="bg-gray-100 p-4 rounded-md shadow-sm">
        <h1 className="text-gray-800 text-xl font-bold mb-2">Agent Details</h1>
        <table className="w-full border-collapse">
          <tbody>
            {Object.entries(agentDetails).map(([key, value]) => (
              <tr key={key}>
                <td className="border px-4 py-2">{key}</td>
                <td className="border px-4 py-2">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } catch (error) {
    console.error(error);
  }
}
