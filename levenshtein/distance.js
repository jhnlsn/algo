function distance (s, t) {
    if (!s.length) return t.length;
    if (!t.length) return s.length;

    return Math.min(
        distance(s.substr(1), t) + 1,
        distance(t.substr(1), s) + 1,
        distance(s.substr(1), t.substr(1)) + (s[0] !== t[0] ? 1 : 0)
    );
}

console.log(distance('ABDE', 'ABDEC'));
