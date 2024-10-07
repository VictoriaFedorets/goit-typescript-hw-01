function showMessage(message: string): void {
  console.log(message);
}
showMessage("Hello!");
// void вказує, що функція нічого не повертає.

function calc(num1: number, num2: number): number {
  return num1 + num2;
}
calc(2, 2);

function customError(): never {
  throw new Error("Error");
}
customError();
// never вказує, що функція ніколи не завершує своє виконання (вона завжди викидає помилку).
