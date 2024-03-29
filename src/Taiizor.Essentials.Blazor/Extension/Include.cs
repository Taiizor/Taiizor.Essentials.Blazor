﻿namespace Taiizor.Essentials.Blazor.Extension
{
    public class Include
    {
        public static async Task Font(string Path)
        {
            await Font(Path, "stylesheet");
        }

        public static async Task FontProtected(string Path, string Pathname)
        {
            await FontProtected(Path, "stylesheet", Pathname);
        }

        public static async Task Font(string Path, string Rel)
        {
            await Interop.Call("Taiizor.Include.Font", Path, Rel);
        }

        public static async Task FontProtected(string Path, string Rel, string Pathname)
        {
            if (await Location.GetPathname() == Pathname)
            {
                await Font(Path, Rel);
            }
        }
        public static async Task FontElement(string Identify, string Path)
        {
            await FontElement(Identify, Path, "stylesheet");
        }

        public static async Task FontElementProtected(string Identify, string Path, string Pathname)
        {
            await FontElementProtected(Identify, Path, "stylesheet", Pathname);
        }

        public static async Task FontElement(string Identify, string Path, string Rel)
        {
            await Interop.Call("Taiizor.Include.Font.Element", Identify, Path, Rel);
        }

        public static async Task FontElementProtected(string Identify, string Path, string Rel, string Pathname)
        {
            if (await Location.GetPathname() == Pathname)
            {
                await FontElement(Identify, Path, Rel);
            }
        }

        public static async Task Script(string Path)
        {
            await Interop.Call("Taiizor.Include.Js", Path);
        }

        public static async Task ScriptProtected(string Path, string Pathname)
        {
            if (await Location.GetPathname() == Pathname)
            {
                await Script(Path);
            }
        }

        public static async Task ScriptElement(string Identify, string Path)
        {
            await Interop.Call("Taiizor.Include.Js.Element", Identify, Path);
        }

        public static async Task ScriptElementProtected(string Identify, string Path, string Pathname)
        {
            if (await Location.GetPathname() == Pathname)
            {
                await ScriptElement(Identify, Path);
            }
        }

        public static async Task Stylesheet(string Path)
        {
            await Stylesheet(Path, "stylesheet");
        }

        public static async Task StylesheetProtected(string Path, string Pathname)
        {
            await StylesheetProtected(Path, "stylesheet", Pathname);
        }

        public static async Task Stylesheet(string Path, string Rel)
        {
            await Stylesheet(Path, Rel, "text/css");
        }

        public static async Task StylesheetProtected(string Path, string Rel, string Pathname)
        {
            await StylesheetProtected(Path, Rel, "text/css", Pathname);
        }

        public static async Task Stylesheet(string Path, string Rel, string Type)
        {
            await Interop.Call("Taiizor.Include.Css", Path, Rel, Type);
        }

        public static async Task StylesheetProtected(string Path, string Rel, string Type, string Pathname)
        {
            if (await Location.GetPathname() == Pathname)
            {
                await Stylesheet(Path, Rel, Type);
            }
        }

        public static async Task StylesheetElement(string Identify, string Path)
        {
            await StylesheetElement(Identify, Path, "stylesheet");
        }

        public static async Task StylesheetElementProtected(string Identify, string Path, string Pathname)
        {
            await StylesheetElementProtected(Identify, Path, "stylesheet", Pathname);
        }

        public static async Task StylesheetElement(string Identify, string Path, string Rel)
        {
            await StylesheetElement(Identify, Path, Rel, "text/css");
        }

        public static async Task StylesheetElementProtected(string Identify, string Path, string Rel, string Pathname)
        {
            await StylesheetElementProtected(Identify, Path, Rel, "text/css", Pathname);
        }

        public static async Task StylesheetElement(string Identify, string Path, string Rel, string Type)
        {
            await Interop.Call("Taiizor.Include.Css.Element", Identify, Path, Rel, Type);
        }

        public static async Task StylesheetElementProtected(string Identify, string Path, string Rel, string Type, string Pathname)
        {
            if (await Location.GetPathname() == Pathname)
            {
                await StylesheetElement(Identify, Path, Rel, Type);
            }
        }
    }
}