export async function fetchProperties() {
  const response = await fetch("https://kasa-xi-six.vercel.app/api/properties");
  if (!response.ok) {
    throw new Error("Erreur réseau");
  }
  return response.json();
}

export const fetchPropertyById = async (id) => {
  try {
    const response = await fetch(`https://kasa-xi-six.vercel.app/api/properties/${id}`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des détails du logement");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
