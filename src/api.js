
export async function getUserInfo() {
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/sample/user`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getFolderData() {
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/sample/folder`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getFirstUserInfo() {
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/users/1`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getUserFolderData() {
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/users/3/folders`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getLinks(folderId) {
  const folderUrl = folderId ? `?folderId=${folderId}` : "";
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/users/4/links${folderUrl}`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}