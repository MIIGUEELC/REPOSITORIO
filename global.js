const text = `Hola Manz,

Te escribo para contarte que Manz no me parece
un nombre apropiado para una persona.

Deberías ser un gato.

Atentamente,
Manz (el gato)`;

const regexp = /M..z/;

regexp.lastIndex      // 0
regexp.test(text);    // true
regexp.lastIndex      // 0
regexp.test(text);    // true
regexp.lastIndex      // 0