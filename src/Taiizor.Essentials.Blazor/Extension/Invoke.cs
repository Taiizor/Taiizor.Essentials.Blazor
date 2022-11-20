﻿namespace Taiizor.Essentials.Blazor.Extension
{
    public class Invoke
    {
        public static async Task ReferenceMethod(params object?[]? Arguments)
        {
            await Interop.Call("Taiizor.Invoke.Reference.MethodAsync", Arguments);
        }

        public static async ValueTask<bool> ReferenceMethodBool(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallBool("Taiizor.Invoke.Reference.MethodAsync", Arguments));
        }

        public static async ValueTask<byte> ReferenceMethodByte(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallByte("Taiizor.Invoke.Reference.MethodAsync", Arguments));
        }

        public static async ValueTask<char> ReferenceMethodChar(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallChar("Taiizor.Invoke.Reference.MethodAsync", Arguments));
        }

        public static async ValueTask<long> ReferenceMethodLong(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallLong("Taiizor.Invoke.Reference.MethodAsync", Arguments));
        }

        public static async ValueTask<int> ReferenceMethodInteger(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallInteger("Taiizor.Invoke.Reference.MethodAsync", Arguments));
        }

        public static async ValueTask<string> ReferenceMethodString(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallString("Taiizor.Invoke.Reference.MethodAsync", Arguments));
        }

        public static async ValueTask<object> ReferenceMethodObject(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallObject("Taiizor.Invoke.Reference.MethodAsync", Arguments));
        }

        public static async ValueTask<bool[]> ReferenceMethodBoolArray(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallBoolArray("Taiizor.Invoke.Reference.MethodAsync", Arguments));
        }

        public static async ValueTask<byte[]> ReferenceMethodByteArray(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallByteArray("Taiizor.Invoke.Reference.MethodAsync", Arguments));
        }

        public static async ValueTask<char[]> ReferenceMethodCharArray(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallCharArray("Taiizor.Invoke.Reference.MethodAsync", Arguments));
        }

        public static async ValueTask<long[]> ReferenceMethodLongArray(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallLongArray("Taiizor.Invoke.Reference.MethodAsync", Arguments));
        }

        public static async ValueTask<int[]> ReferenceMethodIntegerArray(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallIntegerArray("Taiizor.Invoke.Reference.MethodAsync", Arguments));
        }

        public static async ValueTask<string[]> ReferenceMethodStringArray(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallStringArray("Taiizor.Invoke.Reference.MethodAsync", Arguments));
        }

        public static async ValueTask<object[]> ReferenceMethodObjectArray(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallObjectArray("Taiizor.Invoke.Reference.MethodAsync", Arguments));
        }

        public static async Task AssemblyMethod(params object?[]? Arguments)
        {
            await Interop.Call("Taiizor.Invoke.MethodAsync", Arguments);
        }

        public static async ValueTask<bool> AssemblyMethodBool(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallBool("Taiizor.Invoke.MethodAsync", Arguments));
        }

        public static async ValueTask<byte> AssemblyMethodByte(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallByte("Taiizor.Invoke.MethodAsync", Arguments));
        }

        public static async ValueTask<char> AssemblyMethodChar(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallChar("Taiizor.Invoke.MethodAsync", Arguments));
        }

        public static async ValueTask<long> AssemblyMethodLong(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallLong("Taiizor.Invoke.MethodAsync", Arguments));
        }

        public static async ValueTask<int> AssemblyMethodInteger(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallInteger("Taiizor.Invoke.MethodAsync", Arguments));
        }

        public static async ValueTask<string> AssemblyMethodString(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallString("Taiizor.Invoke.MethodAsync", Arguments));
        }

        public static async ValueTask<object> AssemblyMethodObject(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallObject("Taiizor.Invoke.MethodAsync", Arguments));
        }

        public static async ValueTask<bool[]> AssemblyMethodBoolArray(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallBoolArray("Taiizor.Invoke.MethodAsync", Arguments));
        }

        public static async ValueTask<byte[]> AssemblyMethodByteArray(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallByteArray("Taiizor.Invoke.MethodAsync", Arguments));
        }

        public static async ValueTask<char[]> AssemblyMethodCharArray(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallCharArray("Taiizor.Invoke.MethodAsync", Arguments));
        }

        public static async ValueTask<long[]> AssemblyMethodLongArray(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallLongArray("Taiizor.Invoke.MethodAsync", Arguments));
        }

        public static async ValueTask<int[]> AssemblyMethodIntegerArray(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallIntegerArray("Taiizor.Invoke.MethodAsync", Arguments));
        }

        public static async ValueTask<string[]> AssemblyMethodStringArray(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallStringArray("Taiizor.Invoke.MethodAsync", Arguments));
        }

        public static async ValueTask<object[]> AssemblyMethodObjectArray(params object?[]? Arguments)
        {
            return await Task.FromResult(await Interop.CallObjectArray("Taiizor.Invoke.MethodAsync", Arguments));
        }
    }
}