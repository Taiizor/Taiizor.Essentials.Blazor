using Microsoft.JSInterop;
using Taiizor.Essentials.Blazor.Enum;
using Taiizor.Essentials.Blazor.Value;
using HI = Taiizor.Essentials.Blazor.Helper.Interop;

namespace Taiizor.Essentials.Blazor.Extension
{
    public class Interop
    {
        private static IJSRuntime JS = null;

        public Interop(IJSRuntime JSR)
        {
            _ = new Interop(JSR, Internal.JavascriptFiles, Internal.IncldueExecute);
        }

        public Interop(IJSRuntime JSR, Dictionary<JavascriptEnum, bool> Files)
        {
            _ = new Interop(JSR, Files, Internal.IncldueExecute);
        }

        public Interop(IJSRuntime JSR, Dictionary<JavascriptEnum, bool> Files, bool Execute)
        {
            HI.CheckRuntime(JSR);

            JS = JSR;

            foreach (KeyValuePair<JavascriptEnum, bool> File in Internal.JavascriptFiles)
            {
                if (!Files.ContainsKey(File.Key) || Files[File.Key])
                {
                    if (Internal.IncludeJavascript[File.Key] || Execute)
                    {
                        _ = Call("eval", Javascript.File(File.Key));
                        Internal.IncludeJavascript[File.Key] = false;
                    }
                }
            }
        }

        public static async Task Call(string Function, params object?[]? Arguments)
        {
            await JS.InvokeVoidAsync(Function, Arguments);
        }

        public static async ValueTask<bool> CallBool(string Function, params object?[]? Arguments)
        {
            return await JS.InvokeAsync<bool>(Function, Arguments);
        }

        public static async ValueTask<byte> CallByte(string Function, params object?[]? Arguments)
        {
            return await JS.InvokeAsync<byte>(Function, Arguments);
        }

        public static async ValueTask<char> CallChar(string Function, params object?[]? Arguments)
        {
            return await JS.InvokeAsync<char>(Function, Arguments);
        }

        public static async ValueTask<long> CallLong(string Function, params object?[]? Arguments)
        {
            return await JS.InvokeAsync<long>(Function, Arguments);
        }

        public static async ValueTask<int> CallInteger(string Function, params object?[]? Arguments)
        {
            return await JS.InvokeAsync<int>(Function, Arguments);
        }

        public static async ValueTask<string> CallString(string Function, params object?[]? Arguments)
        {
            return await JS.InvokeAsync<string>(Function, Arguments);
        }

        public static async ValueTask<object> CallObject(string Function, params object?[]? Arguments)
        {
            return await JS.InvokeAsync<object>(Function, Arguments);
        }

        public static async ValueTask<bool[]> CallBoolArray(string Function, params object?[]? Arguments)
        {
            return await JS.InvokeAsync<bool[]>(Function, Arguments);
        }

        public static async ValueTask<byte[]> CallByteArray(string Function, params object?[]? Arguments)
        {
            return await JS.InvokeAsync<byte[]>(Function, Arguments);
        }

        public static async ValueTask<char[]> CallCharArray(string Function, params object?[]? Arguments)
        {
            return await JS.InvokeAsync<char[]>(Function, Arguments);
        }

        public static async ValueTask<long[]> CallLongArray(string Function, params object?[]? Arguments)
        {
            return await JS.InvokeAsync<long[]>(Function, Arguments);
        }

        public static async ValueTask<int[]> CallIntegerArray(string Function, params object?[]? Arguments)
        {
            return await JS.InvokeAsync<int[]>(Function, Arguments);
        }

        public static async ValueTask<string[]> CallStringArray(string Function, params object?[]? Arguments)
        {
            return await JS.InvokeAsync<string[]>(Function, Arguments);
        }

        public static async ValueTask<object[]> CallObjectArray(string Function, params object?[]? Arguments)
        {
            return await JS.InvokeAsync<object[]>(Function, Arguments);
        }
    }
}