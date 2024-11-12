// Define a data inicial
const startDate = new Date("May 13, 2024 23:01:00").getTime();

// Atualiza o contador a cada segundo
const x = setInterval(function() {
  // Obtem a data e hora atual
  const now = new Date().getTime();

  // Calcula a diferença em milissegundos
  const distance = now - startDate;

  // Calcula anos, meses, dias, horas, minutos e segundos
  const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365)); // Considerando 365 dias por ano
  const months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44)); // Considerando meses de 30.44 dias
  const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Exibe o contador no HTML
  document.getElementById("years").innerHTML = years;
  document.getElementById("months").innerHTML = months;
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);
