function a(a, b, end, n) {
    if (end === n) {
        return;
    }
    console.log(a);
    a(b, a + b, end + 1, n);
}

a(0, 1, 0, 7);
