const baseURL = 'http://127.0.0.1:3001';

async function loadMemory() {
  try {
    const response = await fetch(`${baseURL}/memory`);

    if (response.ok) {
      const dataServer = await response.json();
      return dataServer;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function save(event, storageData) {
  try {
    const response = await fetch(`${baseURL}/memory`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(storageData),
    });

    if (response.ok) {
      loadMemory();
    }
  } catch (error) {
    console.error(error);
  }
}

export async function deleteData(event, dataIndex, memory) {
  if (dataIndex !== -1) {
    const item = Object.keys(memory)[dataIndex];
    try {
      const response = await fetch(`${baseURL}/memory/${item}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        loadMemory();
        return 'sucess';
      }
    } catch (error) {
      console.error(error);
    }
  }
}
