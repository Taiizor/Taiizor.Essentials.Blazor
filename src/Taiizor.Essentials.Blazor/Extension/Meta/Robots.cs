﻿using Taiizor.Essentials.Blazor.Enum;
using Taiizor.Essentials.Blazor.Value;

namespace Taiizor.Essentials.Blazor.Extension.Meta
{
    public class Robots
    {
        public static async Task Set(string Content)
        {
            await Interop.Call("Taiizor.Meta.Robots.Set", Content);
        }

        public static async ValueTask<string> Get()
        {
            return await Interop.CallString("Taiizor.Meta.Content", Internal.MetaNames[MetaEnum.Robots]);
        }

        public static async ValueTask<bool> Check()
        {
            return await Interop.CallBool("Taiizor.Meta.Check", Internal.MetaNames[MetaEnum.Robots]);
        }

        public static async ValueTask<bool> Check(string Content)
        {
            if (await Check() && await Get() == Content)
            {
                return true;
            }

            return false;
        }

        public static async Task Remove(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.Robots.Remove", Execute);
        }
    }
}