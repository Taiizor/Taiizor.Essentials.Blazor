namespace Taiizor.Essentials.Blazor.Extension
{
    public class Class
    {
        public static async Task Add(string Identify, string Class)
        {
            await Interop.Call("Taiizor.Class.Add", Identify, Class);
        }

        public static async Task Add(string Identify, params string[] Classes)
        {
            foreach (string Class in Classes)
            {
                await Add(Identify, Class);
            }
        }

        public static async Task Set(string Identify, string Class)
        {
            await Interop.Call("Taiizor.Class.Set", Identify, Class);
        }

        public static async ValueTask<string> Get(string Identify)
        {
            return await Interop.CallString("Taiizor.Class.Get", Identify);
        }

        public static async ValueTask<string[]> List(string Identify)
        {
            return await Interop.CallStringArray("Taiizor.Class.List", Identify);
        }

        public static async Task Toggle(string Identify, string Class)
        {
            await Interop.Call("Taiizor.Class.Toggle", Identify, Class);
        }

        public static async Task Toggle(string Identify, params string[] Classes)
        {
            foreach (string Class in Classes)
            {
                await Toggle(Identify, Class);
            }
        }

        public static async ValueTask<bool> Check(string Identify, string Class)
        {
            return await Interop.CallBool("Taiizor.Class.Check", Identify, Class);
        }

        public static async ValueTask<bool> Check(string Identify, string Class, string Value)
        {
            if (await Check(Identify, Class) && await Get(Identify) == Value)
            {
                return true;
            }

            return false;
        }

        public static async Task Remove(string Identify, string Class)
        {
            await Interop.Call("Taiizor.Class.Remove", Identify, Class);
        }

        public static async Task Remove(string Identify, params string[] Classes)
        {
            foreach (string Class in Classes)
            {
                await Remove(Identify, Class);
            }
        }
    }
}