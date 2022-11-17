﻿namespace Taiizor.Essentials.Blazor.Extension
{
    public class Style
    {
        public static async Task Add(string Identify, string Style, string Value)
        {
            await Interop.Call("Taiizor.Style.Add", Identify, Style, Value);
        }

        public static async Task Add(string Identify, params KeyValuePair<string, string>[] Styles)
        {
            foreach (KeyValuePair<string, string> Style in Styles)
            {
                await Add(Identify, Style.Key, Style.Value);
            }
        }

        public static async Task Set(string Identify, string Style)
        {
            await Interop.Call("Taiizor.Style.Set", Identify, Style);
        }

        public static async Task Toggle(string Identify)
        {
            await Interop.Call("Taiizor.Style.Toggle", Identify);
        }

        public static async Task Remove(string Identify, string Style)
        {
            await Interop.Call("Taiizor.Style.Remove", Identify, Style);
        }

        public static async Task Remove(string Identify, params string[] Styles)
        {
            foreach (string Style in Styles)
            {
                await Remove(Identify, Style);
            }
        }
    }
}