import { exportAllDeclaration } from "@babel/types";

test('should pass', () => {
    exportAllDeclaration(true).toBe(true);
})